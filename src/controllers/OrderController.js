const Order = require('../models/Order')

module.exports = {
  async index(req, res) {
    const orders = await Order.find()
    return res.json( orders )
  },
    
  async store(req, res) {
    const OrderData = req.body

    const order = await Order.create(OrderData)

    return res.send( order )
  },
  
  async search(req, res) {
    const { id } = req.params

    const order = await Order.findById(id)

    return res.send( order )
  },
  
  async update(req, res) {
    const { id } = req.params
    const orderData = req.body

    const order = await Order.findByIdAndReplace(id, orderData)

    return res.send( order )
  }
};