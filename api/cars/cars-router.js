const router = require('express').Router();
const Car = require('./cars-model');

router.get('/', async (req, res, next) => {
  try {
    const cars = await Car.findAll();
    res.status(200).json(cars);
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status||500).json({
    message: err.message,
    stack: err.stack
  });
})

module.exports = router;