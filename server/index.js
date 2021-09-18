const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/dev')
const SampleDB = require('./sample-db')

const productRoutes = require('./routes/product')

mongoose.connect(
  config.DB_URI
// ,{
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }
).then(
  () => {
    const sampleDb = new SampleDB()
    sampleDb.initDb()
  }
)

const app = express()
app.use('/app/v1/products', productRoutes)

// app.get('/products', function(req, res) {
//   res.json({'success': true})
// })

const PORT = process.env.PORT || '3001'

app.listen(PORT, function(){
  console.log('i am running!')
})
