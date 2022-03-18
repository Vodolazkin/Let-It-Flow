const express = require('express');
const router = express.Router();
const { Bouquet } = require('../db/models')

router.get('/', async (req, res) => {
  const card = await Bouquet.findAll();
  console.log(card);
  res.send(card)
})

module.exports = router;
