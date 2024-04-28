const jwt = require('jsonwebtoken');
const User = require('./userSchema');
const dotenv = require("dotenv")
const express = require("express")
dotenv.config()
const router = express.Router();
const SECRET_KEY = process.env.JWT_SECRET_KEY; 

const jwtAuthMiddleware = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    req.user = user;

    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = jwtAuthMiddleware;
