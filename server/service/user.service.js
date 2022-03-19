const { User } = require('../db/models');
const { userObj } = require('./../controllers/userObj.controller')
const { generateTokens, saveToken, removeToken } = require('../service/token.service')
const bcrypt = require('bcrypt')


// Логин
async function login(email, password) {
  // ищем пользователя в базе
  const user = await User.findOne({
    where: {
      email,
    },
  });

  // если нет, то  ошибка
  if (user === null) {
    return res.json({ success: false, errors: `Пользователь с ${email} не зарегистрирован!` });
  }
  // проверка паролей с бд
  const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.json({ success: false, errors: 'Пароль неверный' });
  }
  // убираем из объекта пароль
  const userToken = userObj(user)

  // генерируем пару токенов
  const tokens = generateTokens({ ...userToken });

  // сохраняем рефреш токены в бд
  await saveToken(userToken.id, tokens.refreshToken);

  return {
    ...tokens,
    user: userToken,
  };
}


// Logout
async function logout(refreshToken) {
  // удаляем токен
  const token = await removeToken(refreshToken);
  return token;
}


async function refresh(refreshToken) {
  // проверяем токен
  if (!refreshToken) {
    throw ApiError.UnaurhorizedError();
  }
  // валидируем (проверяем) токен
  const userData = tokenService.validateRefreshToken(refreshToken);
  // отправляем токен в функцию, которая найдет его в бд
  const tokenFromDB = await tokenService.findToken(refreshToken);

  if (!userData || !tokenFromDB) {
    throw ApiError.UnaurhorizedError();
  }

  const currentUser = await User.findOne({
    where: {
      id: userData.id,
    },
  });
  // генерируем новую dto
  const userDto = new UserDto(currentUser);
  // генерируем пару токенов
  const tokens = tokenService.generateTokens({ ...userDto });
  // сохраняем рефреш токены в бд
  await tokenService.saveToken(userDto.id, tokens.refreshToken);
  return {
    ...tokens,
    user: userDto,
  };
}



module.exports = { login, logout, refresh };