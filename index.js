var express = require('express')
var app = express()
var cors = require('cors')

app.use(cors())

app.use('/templates', express.static('templates'))
app.use('/', express.static('static'))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
