'use strict'

const hsl = require('./')

const hue = 133
const saturation = 40
const luminosity = 60
const hex = hsl(hue, saturation, luminosity)
console.log(hex) // #70c282
