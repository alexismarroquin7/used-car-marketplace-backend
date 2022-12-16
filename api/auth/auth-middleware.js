const bcrypt = require('bcryptjs');

const User = require('../users/users-model');

const validateLoginHasRequiredFields = (req, res, next) => {
  const { email, password } = req.body;
  if(
    typeof email === 'string' &&
    typeof password === 'string' &&
    email.length > 0 &&
    password.length > 0
  ) {
    next();
  } else {
    next({
      message: "email and password are required to login",
      status: 400
    })
  }
}

const validateUserExistsByEmail = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await User.findByEmail(email);
    if(user){
      req.user = user;
      next();
    } else {
      next({
        message: "user does not exist",
        status: 404
      })
    }
  
  } catch (err) {
    next(err);
  }
}

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  
  const valid = bcrypt.compareSync(password, req.user.password);
  
  if(valid){
    req.session.user = {...req.user, password: null};
    next();
  
  } else {
    next({
      status: 400,
      message: "incorrect password"
    });
  }
};

module.exports = {
  validateLoginHasRequiredFields,
  validateUserExistsByEmail,
  validatePassword
}