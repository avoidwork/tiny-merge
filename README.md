# tiny-merge

Easily merge Arrays or Objects on Client or Server.

## Example
```javascript
import {merge} from "tiny-merge";
const a = {},
    b = {c: "Hello World"};

console.log(merge(a, b).c); // "Hello World"
console.log(a.c); // "Hello World"
```

## License
Copyright (c) 2022 Jason Mulligan
Licensed under the BSD-3 license
