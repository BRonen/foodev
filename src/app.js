const express = require('express')
const router = require('./routes')

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