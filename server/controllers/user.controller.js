const { generateTokens, saveToken } = require('./token.controller')
const { User } = require('../db/models');
const bcrypt = require('bcrypt');

const userRegister = async (req, res) => {
  try {
    const {
      first_name, last_name, email, phone, password,
    } = req.body;
    const isUserExist = await User.findOne({
      where: { email },
    });
    if (isUserExist) {
      return res.json({ success: false, errors: `Пользователь с ${email} уже зарегистрирован!` });
    }
 
    const hashPassword = await bcrypt.hash(password, 3);
    const user = await User.create({ first_name, last_name, email, phone, password: hashPassword });
    
    // delete user.dataValues['password'] //удаляем из объекта пароль
    console.log(user)

    const tokens = generateTokens({...user}) // получаем jwt
    console.log(tokens.refreshToken)

    await saveToken(user.id, tokens.refreshToken)

    // req.session.user = user;
    // req.session.isSession = true;
    // res.json({ success: true, id: user.id, name: user.name });

    return {...tokens, user}
    
  } catch (error) {
    console.log(error.message);
    res.status(401)
      .json({
        message: error.message,
      }).end();
  }
};

module.exports = { userRegister };