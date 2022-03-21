const express = require('express');
const router = express.Router();
const { Cart } = require('../db/models')

router.post('/', async (req, res) => {
  try {
    const { item, id } = req.body
    const recordCartItem = await Cart.create({ bouquet: item.bouquet.id, count: item.count, user_id: id })
  } catch (error) {
    res.status(401)
    .json({ message: error.message})
    .end()  
  }
})


module.exports = router;
