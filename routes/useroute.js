const express = require('express');
const router = express.Router();
const UserController = require('../controller/user');

// Create a new user
router.post('/', function(req, res){UserController.createUser});

// Get user by ID
router.get('/:userId', function(req, res){UserController.getUserById});

// Update user by ID
router.put('/:userId', function(req, res){UserController.updateUserById});

// Delete user by ID
router.delete('/:userId', function(req, res){UserController.deleteUserById});

module.exports = router;
