const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')
const session = require('express-session');

const apiRouter = require('./api-router');

const server = express()

server.use(session({
  name: process.env.SESSION_NAME || 'chocolatechip',
  secret: process.env.SESSION_SECRET || 'keep it secret',
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: false,
    httpOnly: false,
  },
  resave: false,
  saveUninitialized: false
}));

server.use(express.json())
server.use(helmet())
server.use(cors())
server.use(morgan('dev'))

server.use('/api', apiRouter);

server.use((err, req, res, next) => {  // eslint-disable-line
  res.status(err.status||500).json({
    message: err.message,
    stack: err.stack
  });
})

module.exports = server
