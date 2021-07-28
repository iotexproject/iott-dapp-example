import _ from 'lodash';
import { EthHelper, tryLock } from "@helpers/index";
import BaseService from "./base.service";
import { logger, min } from '@common/utils';
import { ETH_ENDPOINT, PEBBLE_CONTRACT } from '@config/env';
import { deviceService } from './device.service';

const pebbleAbi = require('../../artifacts/Pebble.json').abi;

const ethHelper = new EthHelper(ETH_ENDPOINT);
const web3 = ethHelper.web3;
const toBN = web3.utils.toBN;

class BlockChainService extends BaseService {

  private listen_lock = false;
  private pebbleContract: any;
  private bankContract: any;
  private appContract: any;
  // TODO: store blockHeight to DB
  private blockHeight: number = 0;

  constructor() {
    super();
    this.pebbleContract = new web3.eth.Contract(pebbleAbi, PEBBLE_CONTRACT);
  }

  public async catchUp() {
    let from = this.blockHeight; // TODO: read blockHeight from DB
    const last = await web3.eth.getBlockNumber();

    logger.info(`catchUp start at: ${from} ${last}`);

    from++;
    while (from < last) {
      const to = min([ from + 10, last ]);
      await this.scanBlocks(from, to);
      from = to + 1;
    }

    logger.info(`catchUp end at ${from}`);
  }

  @tryLock('listen_lock')
  public async listen() {
    const step = 10;
    const block_id = this.blockHeight; // TODO: read blockHeight from DB
    
    const blockIndex = block_id + 1;
    let id = await web3.eth.getBlockNumber();
    id--;

    if (id < blockIndex)
      return;

    id = min([id, blockIndex + step - 1]);
    try {
      await this.scanBlocks(blockIndex, id);
    } catch (e) {
      logger.error(e.toString());
    }
  }

  private async scanBlocks(fromBlock: number, toBlock: number) {
    const { pebbleContract } = this;

    const events = await pebbleContract.getPastEvents('allEvents', {
      fromBlock,
      toBlock
    });

    for (let i = 0; i < events.length; i++) {
      const { transactionHash: hash, event } = events[i];
      const receipt = await web3.eth.getTransactionReceipt(hash);
      const status = _.get(receipt, 'status');
      if (status !== true)
        continue;

      logger.info(`got pebble event ${event}`);
      await deviceService.onEvent(events[i], receipt);
    }

    this.blockHeight = toBlock; // TODO: store blockHeight to DB
  }
}

export const blockChainService = new BlockChainService();
