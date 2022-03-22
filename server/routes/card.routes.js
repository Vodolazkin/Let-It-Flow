const express = require('express');
const router = express.Router();
const { Bouquet } = require('../db/models');

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const cardOne = await Bouquet.findByPk(id);
  res.json(cardOne)
})


router.post('/',  async (req, res) => {
  try {
    const { title, description, price, img, category_id } = req.body;
 
    const bouquet = await Bouquet.create({ title, description, price, img, category_id });
    return res.json(bouquet)
    
  } catch (error) {
    res.status(401)
      .json({
        message: error.message,
      }).end();
  }
});


module.exports = router;