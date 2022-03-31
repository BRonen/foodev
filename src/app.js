const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const router = require('./routes')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, err => {
  console.log(err? `error: ${err}` : 'server connected')
})

class App{
  constructor(){
    this.express = express()
    this.express.set('views', path.join(__dirname, 'views'))
    this.express.set('view engine', 'ejs')

    this.middlewares()
    this.routes()
  }

  middlewares(){
    this.express.use(express.json())
  }

  routes(){
    this.express.use('/', router)
  }
}

module.exports = new App().express