// auth.js

const express = require('express');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const User = require('./userSchema');
const dotenv = require("dotenv")
dotenv.config()
const router = express.Router();
const SECRET_KEY = process.env.JWT_SECRET_KEY; 
router.use(express.json());

router.post(
  '/signup',
  [
    body('username').notEmpty().trim().isLength({ min: 5 }),
    body('email').notEmpty().trim().isEmail(),
    body('password').notEmpty().trim().isLength({ min: 6 }),
  ],
  async (req, res) => {
    console.log(req) 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
      const existingUser = await User.findOne({ $or: [{ username }, { email }] });
      if (existingUser) {
        return res.status(400).json({ message: 'Username or email already exists' });
      }

      const newUser = new User({ username, email, password });
      await newUser.save();

      return res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
);

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign({ id: user._id, username: user.username, role: user.role }, SECRET_KEY);

    return res.status(200).json({ token, user: { id: user._id, username: user.username, role: user.role } });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
