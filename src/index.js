const pify = require('pify');

const iotap = (iotaInstance, fnString) => {
  const fn = iotaInstance.api[fnString];
  if(!fn || typeof fn !== 'function') {
    return Promise.reject('Function ' + fnString + ' not found in iota.api. Please consult Iota JavaScript documentation.');
  }
  return pify(fn.bind(iotaInstance.api), {multiArgs: false});
}

module.exports = iotap;
