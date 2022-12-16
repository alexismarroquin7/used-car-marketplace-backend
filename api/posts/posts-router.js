const router = require('express').Router();
const Post = require('./posts-model');

router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json(posts);
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