const express = require('express')
const app = express()
const handlebars = require('express-handlebars')

const host = '127.0.0.1'
const port = 7000

app.engine(
  'handlebars',
  handlebars({ defaultLayout: 'main' })
)
app.set('views', './views')
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('home', { title: 'Greetings form Handlebars' })
})

app.listen(port, host, function () {
  console.log(`Server listens http://${host}:${port}`)
})