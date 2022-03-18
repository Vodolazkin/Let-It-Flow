const express = require('express');
const router = express.Router();

const { userLogin } = require('./../controllers/user.controller')

router.route('/')
  .post(userLogin);

module.exports = router;
