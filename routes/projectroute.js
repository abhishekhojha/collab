const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// Create a new project
router.post('/', projectController.createProject);

// Get a project by ID
router.get('/:projectId', projectController.getProjectById);

// Update a project by ID
router.put('/:projectId', projectController.updateProjectById);

// Delete a project by ID
router.delete('/:projectId', projectController.deleteProjectById);

module.exports = router;
