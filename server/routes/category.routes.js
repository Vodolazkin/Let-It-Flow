const express = require('express');
const router = express.Router();
const { getCategories } = require('./../controllers/category.controller')


router.route('/')
  .get(getCategories);

module.exports = router;
