import {
  BankRecord
} from './types/schema';

import { Deposit, Withdraw, Paid } from "./types/Bank/Bank";


export function onDeposit(event: Deposit): void {  
  let id = event.transaction.hash.toHex();
  let record = BankRecord.load(id);
  if (!record)
    record = new BankRecord(id);

  record.from = '';
  record.to = event.params.to.toHex();
  record.amount = event.params.amount;
  record.type = 0;
  record.save();
}

export function onWithdraw(event: Withdraw): void {
  let id = event.transaction.hash.toHex();
  let record = BankRecord.load(id);
  if (!record)
    record = new BankRecord(id);

  record.from = event.params.from.toHex();
  record.to = event.params.to.toHex();
  record.amount = event.params.amount;
  record.type = 1;
  record.save();
}

export function onPaid(event: Paid): void {
  let id = event.transaction.hash.toHex();
  let record = BankRecord.load(id);
  if (!record)
    record = new BankRecord(id);

  record.from = event.params.from.toHex();
  record.to = event.params.to.toHex();
  record.amount = event.params.amount;
  record.type = 2;
  record.save();
}