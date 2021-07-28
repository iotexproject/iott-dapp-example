import { BigInt, store } from '@graphprotocol/graph-ts';
import {
  Device,
  DeviceRecord
} from './types/schema';
import { Confirm, Data, Proposal, Firmware, Remove } from "./types/Pebble/Pebble";

export function onProposal(event: Proposal): void {
  let device = Device.load(event.params.imei);
  if (!device) {
    device = new Device(event.params.imei);
    device.firmware = '';
    device.type = 0;
    device.totalGas = BigInt.fromI32(0);
  }

  device.name = event.params.name;
  device.avatar = event.params.avatar;
  device.proposer = event.params.owner.toHex();
  device.address = event.params.device.toHex();
  device.status = 1;
  device.save();
}

export function onRemove(event: Remove): void {
  let device = Device.load(event.params.imei);
  if (!device)
    return;

  if (event.params.owner.toHex() == device.owner)
    device.owner = null;
  if (event.params.owner.toHex() == device.proposer)
    device.proposer = null;

  device.status = 0;
  device.save();
}

export function onConfirm(event: Confirm): void {
  let device = Device.load(event.params.imei);
  if (!device) {
    device = new Device(event.params.imei);
    device.firmware = '';
    device.type = event.params.channel.toI32();
    device.totalGas = BigInt.fromI32(0);
  }

  device.owner = event.params.owner.toHex();
  device.address = event.params.device.toHex();
  device.status = 2;
  device.save();
}

export function onData(event: Data): void {
  let id = event.transaction.hash.toHex();
  let device = Device.load(event.params.imei);
  if (!device)
    return;

  if (event.params._type == BigInt.fromI32(1)) {
    device.config = event.params.data;
    device.save();
    return;
  } else if (event.params._type == BigInt.fromI32(2)) {
    device.state = event.params.data;
    device.save();
    return;
  }

  device.data = event.params.data;
  device.lastDataTime = event.params.timestamp;
  device.save();

  let record = DeviceRecord.load(id);
  if (!record)
    record = new DeviceRecord(id);

  record.imei = event.params.imei;
  record.operator = event.params.operator.toHex();
  record.raw = event.params.data;
  record.signature = event.params.signature;
  record.gas = event.params.gas;
  record.realGas = event.transaction.gasUsed;
  record.timestamp = event.params.timestamp;
  record.save();
}

export function onFirmware(event: Firmware): void {
  let device = Device.load(event.params.imei);
  if (!device)
    return;

  device.firmware = event.params.app;
  device.save();
}
