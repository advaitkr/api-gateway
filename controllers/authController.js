const jwt = require('jsonwebtoken');
const User = require('../models/user');

const signUp = async (req, res) => {
  const { username, password } = req.body;

  let user = await User.findOne({ username });
  if (user) return res.status(400).send('User already registered.');

  user = new User({ username, password });
  await user.save();

  const token = jwt.sign({ _id: user._id, username: user.username }, 'your_jwt_secret');
  res.header('Authorization', token).send({ token });
};

const signIn = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) return res.status(400).send('Invalid username or password.');

  const validPassword = await user.comparePassword(password);
  if (!validPassword) return res.status(400).send('Invalid username or password.');

  const token = jwt.sign({ _id: user._id, username: user.username }, 'your_jwt_secret');
  res.header('Authorization', token).send({ token });
};

module.exports = {
  signUp,
  signIn
};
