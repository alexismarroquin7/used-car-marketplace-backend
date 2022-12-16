const { validateLoginHasRequiredFields, validateUserExistsByEmail, validatePassword } = require('./auth-middleware');

const router = require('express').Router();

router.post('/register', async (req, res, next) => { // eslint-disable-line
  res.end();
});

router.post('/confirm_email', async (req, res, next) => { // eslint-disable-line
  res.end();
});

router.post(
  '/login',
  validateLoginHasRequiredFields,
  validateUserExistsByEmail,
  validatePassword,
  (req, res) => {
    res.status(200).json({
      user: req.session.user,
      message: `Welcome back ${req.session.user.username}`,
    })
  }
);

router.get('/logout', async (req, res, next) => { // eslint-disable-line
  res.end();
});

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status||500).json({
    message: err.message,
    stack: err.stack
  });
})

module.exports = router;