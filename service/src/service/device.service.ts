import _ from 'lodash';
import BaseService from './base.service';
import { logger, publicKeyToAddress, np } from '@common/utils';
import {
  SensorData,
  BinPackage
} from '../../protogen/pebble';
import {
  ecrecover,
  sha256,
  toBuffer,
  setLengthLeft
} from 'ethereumjs-util';
import { blockChainService } from './bc.service';

class DeviceService extends BaseService {

  public async onEvent(event: any, receipt: any) {
    const { event: n } = event;
    try {
      if (n == 'Data') {
        await this.onData(event, receipt);
      }
    } catch (e) {
      logger.error(e.toString());
    }
  }

  private onData(event: any, receipt: any) {
    const type = _.get(event, 'returnValues._type');
    if (type == 0) {
      return this.onDeviceData(event, receipt);
    }
  }

  private async onDeviceData(event: any, receipt: any) {
    const { returnValues, transactionHash: hash } = event;
    const { imei, operator, data, timestamp, gas, signature } = returnValues;
    const { gasUsed } = receipt;

    let sd: SensorData;
    try {
      sd = SensorData.decode(Buffer.from(data.slice(2), 'hex'));
    } catch (e) {
      logger.error(e.toString());
      return;
    }

    const d = {
      snr: np.divide(sd.snr, 100),
      vbat: np.divide(sd.vbat, 100),
      gas_resistance: np.divide(sd.gasResistance, 100),
      temperature: np.divide(sd.temperature, 100),
      temperature2: np.divide(sd.temperature2, 100),
      pressure: np.divide(sd.pressure, 100),
      humidity: np.divide(sd.humidity, 100),
      light: np.divide(sd.light, 100),
      gyroscope: JSON.stringify(sd.gyroscope),
      accelerometer: JSON.stringify(sd.accelerometer),
      latitude: np.divide(sd.latitude, 100000),
      longitude: np.divide(sd.longitude, 100000)
    };

    // TODO: then you can store device data to any storage
  }
}

export const deviceService = new DeviceService();
