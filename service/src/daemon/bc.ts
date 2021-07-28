import { process_init } from '../common/utils/process_init';
process_init();

import _ from 'lodash';
import cron from 'node-cron';
import { logger, sleep } from '@common/utils';
import { blockChainService } from '@service/index';

async function run() {
  const timezone = 'Asia/Shanghai';

  await blockChainService.catchUp();

  cron.schedule('*/3 * * * * *', async () => await blockChainService.listen(), { timezone }).start();

  while (true) {
    await sleep(1000);
  }
}

if (require.main === module) {
  run()
  .then(() => {
    console.log('bc done.');
  })
  .catch(e => {
    logger.error(`bc: ${e.toString()}`);
  })
}