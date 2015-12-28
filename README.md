# tiny-merge
[![build status](https://secure.travis-ci.org/avoidwork/tiny-merge.svg)](http://travis-ci.org/avoidwork/tiny-merge)

Easily merge Arrays or Objects on Client or Server.

## Example
```javascript
const merge = require("tiny-merge");
let a = {},
    b = {c: "Hello World"};

console.log(merge(a, b).c); // "Hello World"
console.log(a.c); // "Hello World"
```

## License
Copyright (c) 2015 Jason Mulligan
Licensed under the BSD-3 license
