const router = require('express').Router()

router.get('/', (req, res) => (
  res.json({server: 'running...'})
))

module.exports = router