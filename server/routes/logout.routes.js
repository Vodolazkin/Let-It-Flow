const express = require('express');
const router = express.Router();
const { userLogout } = require('./../controllers/user.controller');

router.route('/')
  .get(userLogout);

module.exports = router;
