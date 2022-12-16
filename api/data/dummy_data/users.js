const bcrypt = require('bcryptjs');

const rounds = process.env.DB_ROUNDS 
? Number(process.env.DB_ROUNDS) 
: 8;

const userPassword = process.env.TEST_USER_PASSWORD || '1234';
const hash = bcrypt.hashSync(userPassword, rounds);

const list = [
  {
    user_username: "Indigo",
    user_email: "iviolet@email.com",
    user_email_confirmed: 1,
    user_first_name: "Indigo",
    user_last_name: "Violet",
    user_password: hash,
    role_id: 1
  },
  {
    user_username: "Carnegie",
    user_email: "cmondover@email.com",
    user_email_confirmed: 1,
    user_first_name: "Carnegie",
    user_last_name: "Mondover",
    user_password: hash,
    role_id: 1
  },
  {
    user_username: "Hans",
    user_email: "hdown@email.com",
    user_email_confirmed: 1,
    user_first_name: "Hans",
    user_last_name: "Down",
    user_password: hash,
    role_id: 1
  },
  {
    user_username: "Eric",
    user_email: "ewidget@email.com",
    user_email_confirmed: 1,
    user_first_name: "Eric",
    user_last_name: "Widget",
    user_password: hash,
    role_id: 1
  },
  {
    user_username: "Guy",
    user_email: "gmann@email.com",
    user_email_confirmed: 1,
    user_first_name: "Guy",
    user_last_name: "Mann",
    user_password: hash,
    role_id: 2
  }
];

module.exports = list;