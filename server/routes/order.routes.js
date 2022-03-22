const express = require('express');
const router = express.Router()
const { Order, User } = require('../db/models')

router.get('/', async (req, res) => {
  try {
    const { id } = req.body
    const order = await Order.findAll({ where: { user_id: 1 } })
    res.json({ order })
  } catch (error) {
    res.status(401)
    .json({ message: error.message})
    .end()  
  }
})

router.post('/', async (req, res) => {
  try {
    const { time, date, street, house, apartment, user_id } = req.body;
    console.log(time, date, street, house, apartment, user_id);
    const user = await User.findOne({ where: { id: user_id } })
    // const cartOrder = await Cart.findAll({where: { user_id: id }})
    const order = await Order.create({ 
      delivery_date: date,
      delivery_time: time,
      delivery_address: JSON.stringify({street, house, apartment}),
      delivery_method: 'delivery',
      user_id
    })
    res.json({ order })
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
    res.json({ order })
  } catch (error) {
    res.status(401)
    .json({ message: error.message})
    .end()  
  }
})


module.exports = router;
