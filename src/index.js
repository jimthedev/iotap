const pify = require('pify');

const iotap = {
  invoke: (iotaInstance, fnString) => {
    const fn = iotaInstance.api[fnString];
    if(!fn || typeof fn !== 'function') {
      return Promise.reject('Function ' + fnString + ' not found in iota.api. Please consult Iota JavaScript documentation.');
    }
    return pify(fn.bind(iotaInstance.api), {multiArgs: false});
  },
  create: (iotaInstance) => {
    const fns = {};
    for(const fn in iotaInstance.api) {
      if(!iotaInstance.api.hasOwnProperty(fn)) {
        fns[fn] = iotap.invoke(iotaInstance, fn)
      }
    }
    return fns;
  }
};

module.exports = iotap;
