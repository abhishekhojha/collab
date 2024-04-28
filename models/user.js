const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

// CRUD operations with validation

// Create a new user
async function createUser(userData) {
  try {
    const user = await User.create(userData);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Read user by ID
async function getUserById(userId) {
  try {
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Update user by ID
async function updateUserById(userId, userData) {
  try {
    const user = await User.findByIdAndUpdate(userId, userData, { new: true });
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Delete user by ID
async function deleteUserById(userId) {
  try {
    await User.findByIdAndDelete(userId);
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  createUser,
  getUserById,
  updateUserById,
  deleteUserById
};
