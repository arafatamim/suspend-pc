![npm](https://img.shields.io/npm/v/suspend-pc.svg?logo=npm)

# suspend-pc

Cross-platform solution to suspend your computer from Node.js.

## Usage

```javascript
var sleep = require("suspend-pc");

sleep(function(err) {
  if (err) {
    console.error(err);
  }
});
```

## License

MIT Licensed
