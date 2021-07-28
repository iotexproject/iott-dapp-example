
import {
  Application
} from './types/schema';

import { FirmwareUpdated } from "./types/Application/Application";


export function onFirmwareUpdated(event: FirmwareUpdated): void {
  let app = Application.load(event.params.name);
  if (!app)
    app = new Application(event.params.name);

  app.version = event.params.version;
  app.uri = event.params.uri;
  app.avatar = event.params.avatar;
  app.save();
}