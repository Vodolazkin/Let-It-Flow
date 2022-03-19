const { generateTokens, saveToken, removeToken } = require('./token.controller')
const { User } = require('../db/models');
const bcrypt = require('bcrypt');
const { userObj } = require('./userObj.controller')
const { login, logout, refresh } = require('./../service/user.service')

const userRegister = async (req, res, next) => {
  try {
    const { first_name, last_name, email, phone, password } = req.body;
    const isUserExist = await User.findOne({
      where: { email },
    });
    if (isUserExist) {
      return res.json({ success: false, errors: `Пользователь с ${email} уже зарегистрирован!` });
    }
 
    const hashPassword = await bcrypt.hash(password, 3);
    const user = await User.create({ first_name, last_name, email, phone, password: hashPassword });

    const userToken = userObj(user)

    const tokens = generateTokens({...userToken}) // получаем jwt

    await saveToken(userToken.id, tokens.refreshToken)

    res.cookie('refreshToken', tokens.refreshToken, { maxAge: 30 * 24 * 60 * 1000, httpOnly: true })
    return res.json({...tokens, userToken})
    
  } catch (error) {
    res.status(401)
      .json({
        message: error.message,
      }).end();
  }
};


const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userData = await login(email, password);

    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });

    return res.json({
      userData,
      success: true,
      message: "Авторизация прошла успешно",
    })
    
  } catch (error) {
    res.status(401)
      .json({
        message: error.message,
      }).end();
  }
};


const userLogout = async (req, res, next) => {
  try {
    // вытаскиваем рефреш токен
    const { refreshToken } = req.cookies;
    // передаем в сервис рефрешнутый токен
    const token = await logout(refreshToken);
    // в ответе удаляем куку
    res.clearCookie("refreshToken");
    return res.json(token);

  } catch (error) {
    res.status(401)
      .json({
        message: error.message,
      }).end();
  }
};


async function userRefresh(req, res) {
  try {
    // достаем из кук токен
    const { refreshToken } = req.cookies;
    const userData = await refresh(refreshToken);
    // установим рефреш куки
    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });
    return res.json(userData);
  } catch (error) {
    next(error);
  }
}


module.exports = { userRegister, userLogin, userLogout, userRefresh };