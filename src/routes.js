const router = require('express').Router()

const OrderController = require('./controllers/OrderController')

router.get('/', (req, res) => (
  res.json({server: 'running...'})
))

router.get('/orders', OrderController.index)
router.post('/orders', OrderController.store)

router.get('/order/:id', OrderController.search)
router.get('/order/:id', OrderController.update)

module.exports = router