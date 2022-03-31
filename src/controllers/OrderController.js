const Order = require('../models/Order')

module.exports = {
  async index(req, res){
    const orders = await Order.find()

    console.log( orders )

    return res.render('orders', { orders })
  },
    
  async store(req, res){
    const OrderData = req.body

    const order = await Order.create(OrderData)

    console.log(order)

    return res.send( order )
  },
  
  async search(req, res){
    const { id } = req.params

    const order = await Order.findById(id)

    let totalPrice = 0
    order.dishes.forEach(dish => { totalPrice += parseInt(dish.price) })

    return res.render('order', { order, totalPrice } )
  },
  
  async update(req, res){
    const { id } = req.params
    const orderData = req.body

    const order = await Order.findOneAndUpdate({_id: id}, orderData)

    return res.send( order )
  },

  async payment(req, res){
    const { id } = req.params

    const order = await Order.findById(id)
    
    return res.render('payment', {order})
  },

  async remove(req, res){
    const { id } = req.params

    const order = await Order.findById(id)

    return res.render('remove', {order})
  },

  async delete(req, res){
    const { id } = req.params

    const order = await Order.deleteOne({_id: id})
    
    return res.render('payment', {order})
  }
}