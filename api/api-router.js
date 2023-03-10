const router = require('express').Router();

const authRouter = require('./auth/auth-router.js');
const carsRouter = require('./cars/cars-router.js');
const carModelsRouter = require('./car_models/car_models-router.js');
const carMakesRouter = require('./car_makes/car_makes-router.js');
const carTypesRouter = require('./car_types/car_types-router.js');
const postsRouter = require('./posts/posts-router.js');

router.use('/auth', authRouter);
router.use('/cars', carsRouter);
router.use('/car_makes', carMakesRouter);
router.use('/car_models', carModelsRouter);
router.use('/car_types', carTypesRouter);
router.use('/posts', postsRouter);

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status||500).json({
    message: err.message,
    stack: err.stack
  });
})

module.exports = router;