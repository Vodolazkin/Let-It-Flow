const { validateAccessToken } = require('../service/token.service')


module.exports = function (req, res, next) {
  try {
    // // в заголовке запроса указывваем Authorization: bearer access_token
    // const authorizationHeader = req.headers.authorization;
    // if (!authorizationHeader) {
    //   return next(ApiError.UnaurhorizedError());
    // }
    // // достаем access_token как второй параметр по пробелу
    // const [tokenType, accessToken] = authorizationHeader.split(' ');
    // if (!accessToken) {
    //   return next(ApiError.UnaurhorizedError());
    // }

    // функция валдиции токена
    const userData = validateAccessToken(accessToken);
    if (!userData) {
      return res.redirect('/login')
    }
    req.user = userData;
    next();
  } catch (error) {
    return res.redirect('/login')
  }
};
