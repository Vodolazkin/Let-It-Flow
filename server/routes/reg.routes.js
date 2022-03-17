const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { userRegister } = require('./../controllers/user.controller')

router.route('/')
  .get(userRegister);

module.exports = router;
