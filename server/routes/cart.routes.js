const express = require('express');
const router = express.Router();
const { Cart } = require('../db/models')

router.get('/', async (req, res) => {
  try {
    const carts = await Cart.findAll({ where: { user_id: 2}})
    res.json({ carts })
  } catch (error) {
    res.status(401)
    .json({ message: error.message})
    .end()  
  }
})

router.post('/', async (req, res) => {
  try {
    const { item, id } = req.body
    console.log(req.body);
    const recordCartItem = await Cart.create({ bouquet_id: item.bouquet.id, count: item.count, user_id: id })
    console.log('000',recordCartItem);
    return res.json({recordCartItem})
  } catch (error) {
    res.status(401)
    .json({ message: error.message})
    .end()  
  }
})


module.exports = router;
