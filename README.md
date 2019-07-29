# Fluffy &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/keisei77/fluffy/blob/develop/README.md) [![npm](https://img.shields.io/npm/v/@keisei/fluffy.svg)](https://www.npmjs.com/package/@keisei/fluffy) [![CircleCI](https://circleci.com/gh/keisei77/fluffy.svg?style=shield)](https://circleci.com/gh/keisei77/fluffy)

Misc helpful functions to make your life better.

## Installation

Using npm:

```shell
$ npm i -g npm
$ npm i @keisei/fluffy
```

Note: add --save if you are using npm < 5.0.0

using yarn:

```shell
$ yarn add @keisei/fluffy
```

## Examples

We will have several examples soon. Here is the first one you get started.

```javascript
import fluffy from '@keisei/fluffy';

function addOne(num = fluffy.require()) {
  return num + 1;
}

// Also you can use
import { required } from '@keisei/fluffy';

function addOne(num = required()) {
  return num + 1;
}

addOne(); // Uncaught TypeError

addOne(1); // Got 2

// You can pass error messages to give people a detailed description.
require('Please provide a valid parameter');
```

### License

Fluffy is [MIT licensed](./LICENSE).
