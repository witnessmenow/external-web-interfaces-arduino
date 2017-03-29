var express = require('express')
var app = express()
var cors = require('cors')

app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.use('/templates', express.static('templates'))
app.use('/static', express.static('static'))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
