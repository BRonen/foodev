const { Schema, model } = require('mongoose')

const OrderSchema = new Schema({
  dishes: [{
    dish: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
      required: false,
    }
  }],
  payment: {
      type: String,
      required: true,
  },
  customer: {
      name: {
          type: String,
          required: true,
      },
      phone: {
          type: String,
          required: true,
      },
  },
  address: {
      type: String,
      required: true,
  },
  status: {
      type: String,
      required: true,
  },
}, {
  timestamps: true,
})

module.exports = model('Order', OrderSchema)