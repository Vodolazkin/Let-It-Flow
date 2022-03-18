const express = require('express');
const router = express.Router();
const { userLogout } = require('./../controllers/user.controller');

router.route('/')
  .post(userLogout);

module.exports = router;
