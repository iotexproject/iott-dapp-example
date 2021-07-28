import _ from 'lodash';

const privateKeyToAddress = require('ethereum-private-key-to-address');

const { env } = process;

const get = (name: string, _default: string = '') => {
  return _.get(env, name, _default);
}

const getNumber = (name: string, _default: number = 0) => {
  const n = get(name);
  const num = (!_.isNil(n) && !_.isEmpty(n)) ? _.toNumber(n) : undefined;
  return _.defaultTo(num, _default);
}

export const NODE_ENV = env.NODE_ENV;

export const PROJECT = get('PROJECT', 'iott-dapp-example');


export const SYSLOG_HOST = get('SYSLOGD_HOST');
export const SYSLOG_PORT = getNumber('SYSLOGD_PORT', 514);
export const SYSLOG_PROTOCOL = get('SYSLOGD_PROTOCOL', 'U');
export const SYSLOG_TAG = get('SYSLOGD_TAG', `${PROJECT}`);

export const LOG_LEVEL = get('LOG_LEVEL', 'error');
export const ETH_ENDPOINT = get('ETH_ENDPOINT');
export const PRIVATE_KEY = get('PRIVATE_KEY');
export const ADDRESS = privateKeyToAddress(PRIVATE_KEY);
export const START_HEIGHT = getNumber('START_HEIGHT', 0);
export const PEBBLE_CONTRACT = get('PEBBLE_CONTRACT');