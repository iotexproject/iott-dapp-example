import * as crypto from 'crypto';
import _ from 'lodash';
import { logger } from '@common/utils';

const IV = 'FnJL7EDzjqWjcaY9';
const pwd = 'xa^%jk12jkjhasjl@@@nMJLkjeusivb1';

class Token {
  public create(uid: number, timestamp: number) {
    const msg = uid + '|' + timestamp;
    const cipher = crypto.createCipheriv('aes256', pwd, IV);
    let enc = cipher.update(msg, 'utf8', 'hex');
    enc += cipher.final('hex');
    return enc;
  }

  public parse(token: string) {
    const decipher = crypto.createDecipheriv('aes256', pwd, IV);
    let dec = '';

    try {
      dec = decipher.update(token, 'hex', 'utf8');
      dec += decipher.final('utf8');
    } catch (e) {
      logger.error(`[token] fail to decrypt token: ${token} `);
      return null;
    }

    const ts = dec.split('|');
    if (ts.length !== 2) {
      return null;
    }

    return {
      uid: _.toNumber(ts[0]),
      timestamp: _.toNumber(ts[1]),
    };
  }
}

export const token = new Token();
