
import crypto from 'crypto';

function dataToString(args: any) {
  let result = '';
  const keys = Object.keys(args).sort();
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (result.length > 0) result = result + '&';
    result = result + key + '=' + args[key];
  }

  return result;
}

export function sign(args: any, secret: string) {
  const hex = crypto.createHmac('sha256', secret).update(dataToString(args)).digest('hex');
  return Buffer.from(hex).toString('base64');
}
