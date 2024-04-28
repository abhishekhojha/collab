const express = require('express');
const router = express.Router();
const CodeSnippetController = require('../controller/codesnippet');
const jwtAuthMiddleware = require("../auth/JWT")
router.use(jwtAuthMiddleware)
// Create a new code snippet
router.post('/', function(req, res){CodeSnippetController.createCodeSnippet});

// Get code snippet by ID
router.get('/:snippetId', function(req, res){CodeSnippetController.getCodeSnippetById});

// Update code snippet by ID
router.put('/:snippetId', function(req, res){CodeSnippetController.updateCodeSnippetById});

// Delete code snippet by ID
router.delete('/:snippetId', function(req, res){CodeSnippetController.deleteCodeSnippetById});

module.exports = router;