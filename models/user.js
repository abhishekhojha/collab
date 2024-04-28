const mongoose = require('mongoose');
const User = require("../auth/userSchema")

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
