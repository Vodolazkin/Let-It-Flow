const userRegister = async (req, res) => {
  try {
    const {
      name, email, password, confirmPassword,
    } = req.body;
    const isUserExist = await User.findOne({
      where: { email },
    });
    if (isUserExist) {
      return res.json({ success: false, errors: `Пользователь с ${email} уже зарегистрирован!` });
    }
 
    const hashPassword = await bcrypt.hash(password, 3);
    const user = await User.create({ name, email, password: hashPassword });
    req.session.user = user;
    req.session.isSession = true;
    res.json({ success: true, id: user.id, name: user.name });
    
  } catch (error) {
    console.log(error.message);
    res.status(401)
      .json({
        message: error.message,
      }).end();
  }
};

module.exports = { userRegister };