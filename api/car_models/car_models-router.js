const router = require('express').Router();
const CarModel = require('./car_models-model.js');

router.get('/', async (req, res, next) => {
  try {
    const carModels = await CarModel.findAll();
    res.status(200).json(carModels);
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