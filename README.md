# IOTAp

> Promisify [iota.lib.js](https://github.com/iotaledger/iota.lib.js/) API functions

## Install

```
npm install --save iota.lib.js iotap
```

## Changelog

- 2.0.0 You should now use either .create or .invoke.

## Full example usage

```js

// This example gets the balance of two accounts
// and assumes you're passing in info about your
// IOTA node and the wallets/accounts via
// environment variables or https://npm.im/dotenv

// This example uses es6 modules so you'll need
// babel or @std/esm or you can use require instead
import IOTA from 'iota.lib.js';
import iotap from 'iotap';

const {
  IOTA_SOURCE_SEED,
  IOTA_PROTOCOL,
  IOTA_HOST,
  IOTA_PORT,
  IOTA_DESTINATION_ADDRESS,
  IOTA_DESTINATION_SEED
} = process.env;

console.log(`Using node ${IOTA_PROTOCOL}://${IOTA_HOST}:${IOTA_PORT}`)

// Connect to an IOTA instance
const iota = new IOTA({
    'host': `${IOTA_PROTOCOL}://${IOTA_HOST}`,
    'port': IOTA_PORT
});

// Pass in the instance of iota to iotap

// You can either create an instance
const i = iotap.create(iota);
const getSourceBalance = i.getAccountData(IOTA_SOURCE_SEED)
const getDestinationBalance = i.getAccountData(IOTA_DESTINATION_SEED);

// --- OR invoke ---
const getSourceBalance = iotap.invoke(iota, 'getAccountData')(IOTA_SOURCE_SEED);
const getDestinationBalance = iotap.invoke(iota, 'getAccountData')(IOTA_DESTINATION_SEED);

// The result will be a promise that you can use
// as you'd expect. This example uses Promise.all
// but you could just use .then if dealing with a single
// promise.
Promise.all([getSourceBalance, getDestinationBalance])
  .then(([sourceAccountData, destinationAccountData]) => console.log(sourceAccountData.balance, destinationAccountData.balance))
  .catch(e => console.error(e));
```

## Donate IOTA

IOTA: NUCHQLPEBTDAKRCKEYLGQQNIYIKLKCBBNQWSAURCXQDDKSTXBCWZCPRCGRTSG9UHTCSNLGENX99DVFMMZJUEQSKEQ9

![Donate IOTA](donate.png)
