const test = require('tape')
const qr = require('.')

const data = {
  schema: 'ImportData',
  data: {
    provider: '5623ab6d6518b00065fb9d133fc34ebb6141015de72a5c39946058e0fbd35550',
    dataHash: '01623fc16b2b76ac7d102fa2edcb07c351f1acccc597f3c7d27e118440510426',
    host: 'https://blah.blah'
  }
}

test('create a simple data url', t => {
  qr.toDataURL(data, (err, result) => {
    t.error(err)
    t.equals(
      result,
      'data:image/png;base64,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'
    )
    t.end()
  })
})

test('create a simple string', t => {
  qr.toString(data, (err, result) => {
    t.error(err)
    t.equals(
      result,
      `                                                     
                                                     
    █▀▀▀▀▀█ ▄ ▀ ▄▀▀█▄▄▀▀▀ ▄▄█ ▀▀ ▄▀ ▄█ ▄▀ █▀▀▀▀▀█    
    █ ███ █     █ ▀█▀▀▀ ▄▄██▀▄█▀▀█▀▄▀  █▄ █ ███ █    
    █ ▀▀▀ █ ▀▀█▄▄▀▀▀ ▄▄ █▀▀▀█ ▀▄██ █▀▀▀▀▀ █ ▀▀▀ █    
    ▀▀▀▀▀▀▀ ▀ ▀▄▀ ▀ █ █▄█ ▀ █▄▀▄▀▄▀ ▀ ▀▄▀ ▀▀▀▀▀▀▀    
    ▀ ▀▄▀ ▀  █  ▄▄█ ▄▄▀▄█▀▀▀▀ ██▀ █▄▄ ▀ █▄  █▄▄█     
    ▀ ██▄▀▀█    ▄█▀  ▀▀▄██▀ ▀▄███ ▄▄▄ ▄███▄▀██▀▄▀    
    ▀   ▀█▀▄█▄  ▀   █▄▀ █▄ ▄█▄   █▀ █▄ ▄▀▄ ▄ █▄▄█    
    ▄█▄▀█ ▀ █▄▀▄▀▄▄█ ▄▄ █▄▀▀▀ ▀▄█▄ ▀▀█▀██ ▄ ▀█▀▄▀    
    ▄▄▀ ▀ ▀ █ ▀▄ ██▀▄▄▀    ▄ █▀██▄▀▀▄▄▀▄▄ ▀▄ ▄▀▄█    
    ▀ ██▄▄▀█▄▄▄██▀█▄▀▄ █▀ ▀█▀▀▄ █▄▀ ▀▀▄██▄█▀▀ ▀▄█    
    ▀▄█▀█▀▀▀█▄▄█▀▄▀▄  █ █▀▀▀█  ▀▀▀█▄   ▀█▀▀▀█▄ ▀▄    
    █▄ ▄█ ▀ █▀ █▄ ▄▄▀▄▀▄█ ▀ █▄▀ █ ▀▄▀ █▀█ ▀ █▄▀ ▄    
    ▄█  ██▀██  ▀ █▄▄ ▄▀▀█▀██▀ ▀▄██ █▀▄█▀▀█▀▀█▀█▄▀    
     ▄ ▀ ▄▀█▄ ▀█ ▀  ▄ █▄▀ ▀▀▄▄▀▀ ▄ ▀  █▄▀▄ █▀▄▄▄▀    
    ▄▀▄▀▀▀▀▄▄▄ █ ▄█  ▄▄▀ ▀ █▀▄▀▄▀██▀▀█▀▀█▄ ▄█▄▀▄     
     █▀▀▄▄▀▀▀ ▄▀█ █▀ ▀▄▄██▀ ▀▄ ▄ ▄▄  ▄▄▄█▀▀  ▄█▄     
    ▀▄▄█ ▄▀ ███▄█▀ ▄▀██▄  ▀█ ▄ █▀▄█▀█▄ ███▀ ▄█ ▄     
     ▄▄▄█ ▀▀▀█▄▀██▄ ██▄ ▄ █ ▀  █▀▀█ █▀█▀ ▄▀  ▄▀▀     
    ▀  ▀▀ ▀▀█▄ █▄█▄▄█▀  █▀▀▀████▀▄▀▀  ▄ █▀▀▀█ ▀▄▄    
    █▀▀▀▀▀█   ▄▄▄▄█▄▀█▀██ ▀ █▄█▄▄█   ▄█ █ ▀ █▄▀▄▀    
    █ ███ █ ▀▄ █▀█▄█▀█▀▄█▀▀▀██ ▄▄▄▄ ███▀▀▀▀▀█▀▀ ▀    
    █ ▀▀▀ █ ▀▄███ ▄▄▄▀█▄▀ █▄▀  ▄  ▀▀ ▄█ ██▀▄▀  ██    
    ▀▀▀▀▀▀▀ ▀  ▀▀  ▀▀      ▀▀ ▀   ▀▀ ▀▀   ▀▀▀ ▀ ▀    
                                                     
                                                     `
    )
    t.end()
  })
})

test('create data cells', t => {
  const result = qr.toCells(data)
  t.deepEquals(result, [
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0],
    [1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1],
    [0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1],
    [1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
    [0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0],
    [1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1],
    [0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0],
    [0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0],
    [0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0],
    [1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0],
    [0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0],
    [0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1]
  ])
  t.end()
})
