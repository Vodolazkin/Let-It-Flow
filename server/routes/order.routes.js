const express = require('express');
const router = express.Router()
const { Order, User } = require('../db/models')

router.post('/delivery', async (req, res) => {
  try {
    const { time, date, street, house, apartment, user_id } = req.body;
    const user = await User.findOne({ where: { id: user_id } })
    const order = await Order.create({ 
      delivery_date: date,
      delivery_time: time,
      delivery_address: JSON.stringify({street, house, apartment}),
      delivery_method: 'delivery',
      user_id
    })
  } catch (error) {
    res.status(401)
    .json({ message: error.message})
    .end()  
  }
})
router.post('/pickup', async (req, res) => {
  try {
    const { time, date, user_id } = req.body;
    const user = await User.findOne({ where: { id: user_id } })
    const order = await Order.create({ 
      delivery_date: date,
      delivery_time: time,
      delivery_method: 'pickup',
      user_id
    })
  } catch (error) {
    res.status(401)
    .json({ message: error.message})
    .end()  
  }
})


module.exports = router;
