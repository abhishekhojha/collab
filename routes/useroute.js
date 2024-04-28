const express = require('express');
const router = express.Router();
const UserController = require('../controller/user');

// Create a new user
router.post('/', UserController.createUser);

// Get user by ID
router.get('/:userId', UserController.getUserById);

// Update user by ID
router.put('/:userId', UserController.updateUserById);

// Delete user by ID
router.delete('/:userId', UserController.deleteUserById);

module.exports = router;
