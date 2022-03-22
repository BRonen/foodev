const express = require('express')
const mongoose = require('mongoose');

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

    this.middlewares()
    this.routes()
  }

  middlewares(){
    this.express.use(express.json())
  }

  routes(){
    this.express.use(express.static('public'))
    this.express.use('/api', router)
  }
}

module.exports = new App().express