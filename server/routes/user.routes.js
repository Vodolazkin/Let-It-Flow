const express = require('express');
const router = express.Router();
const { userRegister, userLogin, userLogout, userRefresh } = require('../controllers/user.controller');

router.post('/login', userLogin);
router.post('/signup', userRegister);
router.get('/logout', userLogout);
router.get('/refresh', userRefresh); 

module.exports = router;
