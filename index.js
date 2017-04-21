
const omit = require('object.omit')
const QR = require('qrcode')
const schema = require('@tradle/qr-schema')

module.exports = {
  schema,
  toCells,
  toCanvas: function (opts, cb) {
    if (!opts.canvas) throw new Error('expected "canvas"')

    QR.toCanvas(opts.canvas, getQRCodeData(opts), getQRCodeOpts(opts), cb)
  },
  toDataURL: function (opts, cb) {
    QR.toDataURL(getQRCodeData(opts), getQRCodeOpts(opts), cb)
  },
  toString: function (opts, cb) {
    QR.toString(getQRCodeData(opts), getQRCodeOpts(opts), cb)
  }
}

function toCells (opts) {
  return matrixToCells(toQRCode(opts).modules)
}

function toQRCode (opts) {
  return QR.create(getQRCodeData(opts), getQRCodeOpts(opts))
}

function getQRCodeOpts (opts) {
  return omit(opts, ['schema', 'data'])
}

function getQRCodeData (opts) {
  return [{
    mode: 'alphanumeric',
    data: schema.toHex(opts)
  }]
}

function matrixToCells (matrix) {
  const n = matrix.size
  const rows = new Array(n)
  for (let i = 0; i < n; i++) {
    let row = new Array(n)
    for (let j = 0; j < n; j++) {
      row[j] = matrix.get(i, j)
    }

    rows[i] = row
  }

  return rows
}
