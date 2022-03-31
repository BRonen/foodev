const router = require('express').Router()

const OrderController = require('./controllers/OrderController')

router.get('/', (req, res) => (
  res.json({server: 'runnning'})
))

router.get('/admin', (req, res) => {
  return res.render('admin')
})
router.get('/orders', OrderController.index)
router.post('/orders', OrderController.store)

router.get('/order/:id', OrderController.search)
router.put('/order/:id', OrderController.update)
router.delete('/order/:id', OrderController.delete)

router.get('/order/:id/payment', OrderController.payment)
router.get('/order/:id/remove', OrderController.remove)

module.exports = router