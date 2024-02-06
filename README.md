# hsl-to-hex

## Coding Exercise from Dave Mark Clements book, ["Node Cookbook"](https://subscription.packtpub.com/book/web-development/9781785880087)

Convert HSL colors to RGB colors in hex format.

## Install

```sh
npm install --save @davidmarkclements/hsl-to-hex
```

## API

```js
require('hsl-to-hex') => Function
hsl(hue, saturation, luminosity)` => String
```

## Example

```js
var hsl = require('hsl-to-hex')
var hue = 133
var saturation = 40
var luminosity = 60
var hex = hsl(hue, saturation, luminosity)
console.log(hex) // #70c282

```

## License

MIT
