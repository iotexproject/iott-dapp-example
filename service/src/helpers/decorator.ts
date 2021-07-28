import _ from 'lodash';
import { Exception } from "@common/exceptions";

export function tryLock(name: string) {
  return function(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<(...args: any[]) => any>) {
    const method = descriptor.value;
    descriptor.value = async function(...args: any[]) {
      if (!_.has(this, name)) throw new Exception(500, `target without ${name}`);
      if (_.get(this, name) == true)
        return;

      _.set(this, name, true);
      const result = await method!.apply(this, args);
      _.set(this, name, false);
      return result;
    };
  };
}