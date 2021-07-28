
import _ from 'lodash';

export function getUppers(tops: string) {
    return _.filter(tops.split(','), v => !_.isEmpty(v) && v != '0');
}

export function min(nums: number[]) {
  return _.min(nums) || 0;
}

export function max(nums: number[]) {
  return _.max(nums) || 0;
}

export function dictValueAddNum(dict: any, key: string | number, value: number = 1) {
  if (value == 0)
      return dict;

  if (dict[key]) {
      dict[key] += value;
  } else {
      dict[key] = value;
  }

  return dict;
}
