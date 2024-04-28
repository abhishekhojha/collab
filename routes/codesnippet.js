const express = require('express');
const router = express.Router();
const CodeSnippetController = require('../controller/codesnippet');
const jwtAuthMiddleware = require("../auth/JWT")
router.use(jwtAuthMiddleware)
router.use(express.json());

// Create a new code snippet
router.post('/', function(req, res){
    // return res.status(201).json("codeSnippet");
    CodeSnippetController.createCodeSnippet(req, res)
});

// Get code snippet by ID
router.get('/:snippetId', function(req, res){CodeSnippetController.getCodeSnippetById});

// Update code snippet by ID
router.put('/:snippetId', function(req, res){CodeSnippetController.updateCodeSnippetById});

// Delete code snippet by ID
router.delete('/:snippetId', function(req, res){CodeSnippetController.deleteCodeSnippetById});

module.exports = router;