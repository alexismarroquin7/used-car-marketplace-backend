const router = require('express').Router();
const CarMakes = require('./car_makes-model.js');

router.get('/', async (req, res, next) => {
  try {
    const carMakes = await CarMakes.findAll();
    res.status(200).json(carMakes);
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