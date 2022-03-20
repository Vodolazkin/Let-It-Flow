const { validateAccessToken } = require('../service/token.service')


module.exports = function (req, res, next) {
  try {
    // в заголовке запроса указывваем Authorization: bearer access_token
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      return res.status(403).json({
        message: "No token provided!"
      });
    }
    // достаем access_token как второй параметр по пробелу
    const [tokenType, accessToken] = authorizationHeader.split(' ');
    if (!accessToken) {
      return res.status(403).json({
        message: "No token provided!"
      });
    }

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


// verifyToken = (req, res, next) => {
//   let token = req.headers["x-access-token"];
//   if (!token) {
//     return res.status(403).send({
//       message: "No token provided!"
//     });
//   }
//   jwt.verify(token, config.secret, (err, decoded) => {
//     if (err) {
//       return res.status(401).send({
//         message: "Unauthorized!"
//       });
//     }
//     req.userId = decoded.id;
//     next();
//   });
// };
// isAdmin = (req, res, next) => {
//   User.findByPk(req.userId).then(user => {
//     user.getRoles().then(roles => {
//       for (let i = 0; i < roles.length; i++) {
//         if (roles[i].name === "admin") {
//           next();
//           return;
//         }
//       }
//       res.status(403).send({
//         message: "Require Admin Role!"
//       });
//       return;
//     });
//   });
// };
