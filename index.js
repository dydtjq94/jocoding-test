const express = require('express')
const cros = require('cors')
const app = express()

app.use(cors())

app.get('/sound/:name', function (req, res) {
  const { name } = req.params
  name == 'dog' ? res.send({ sound: '멍멍' }) : res.send({ sound: '야옹' })
})

app.listen(3000)
