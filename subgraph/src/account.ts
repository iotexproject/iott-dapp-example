
import {
  Account
} from './types/schema';
  
import { Updated } from "./types/Account/Account";
  
  
export function onUpdated(event: Updated): void {
  let account = Account.load(event.params.owner.toHex());
  if (!account)
    account = new Account(event.params.owner.toHex());

  account.name = event.params.name;
  account.avatar = event.params.avatar;
  account.save();
}