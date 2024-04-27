const express = require('express');
const router = express.Router();
const CodeSnippetController = require('../controllers/codeSnippetController');

// Create a new code snippet
router.post('/', CodeSnippetController.createCodeSnippet);

// Get code snippet by ID
router.get('/:snippetId', CodeSnippetController.getCodeSnippetById);

// Update code snippet by ID
router.put('/:snippetId', CodeSnippetController.updateCodeSnippetById);

// Delete code snippet by ID
router.delete('/:snippetId', CodeSnippetController.deleteCodeSnippetById);

module.exports = router;
