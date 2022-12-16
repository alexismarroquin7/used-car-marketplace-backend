const router = require('express').Router();
const CarTypes = require('./car_types-model.js');

router.get('/', async (req, res, next) => {
  try {
    const carTypes = await CarTypes.findAll();
    res.status(200).json(carTypes);
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