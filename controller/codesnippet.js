const CodeSnippet = require('../models/codeSnippet');

// Controller for creating a new code snippet
exports.createCodeSnippet = async (req, res) => {
    try {
        const { title, code, language } = req.body;
        const userId = req.user.id;
        const codeSnippet = await CodeSnippet.createCodeSnippet({ userId, title, code, language });
        return res.status(201).json(codeSnippet);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

// Controller for getting a code snippet by its ID
exports.getCodeSnippetById = async (req, res) => {
    try {
        const codeSnippet = await CodeSnippet.getCodeSnippetById(req.params.snippetId);
        if (!codeSnippet) {
            return res.status(404).json({ message: 'Code snippet not found' });
        }
        res.json(codeSnippet);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller for updating a code snippet by its ID
exports.updateCodeSnippetById = async (req, res) => {
    try {
        const codeSnippet = await CodeSnippet.updateCodeSnippetById(req.params.snippetId, req.body, { new: true });
        if (!codeSnippet) {
            return res.status(404).json({ message: 'Code snippet not found' });
        }
        res.json(codeSnippet);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controller for deleting a code snippet by its ID
exports.deleteCodeSnippetById = async (req, res) => {
    try {
        const codeSnippet = await CodeSnippet.deleteCodeSnippetById(req.params.snippetId);
        if (!codeSnippet) {
            return res.status(404).json({ message: 'Code snippet not found' });
        }
        res.json({ message: 'Code snippet deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
