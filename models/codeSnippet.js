const mongoose = require('mongoose');

const codeSnippetSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  code: { type: String, required: true },
  language: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const CodeSnippet = mongoose.model('CodeSnippet', codeSnippetSchema);

module.exports = CodeSnippet;

// Create a new code snippet
async function createCodeSnippet(codeSnippetData) {
  try {
    console.log(codeSnippetData)
    const codeSnippet = await CodeSnippet.create(codeSnippetData);
    return codeSnippet;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Read code snippet by ID
async function getCodeSnippetById(codeSnippetId) {
  try {
    const codeSnippet = await CodeSnippet.findById(codeSnippetId);
    return codeSnippet;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Update code snippet by ID
async function updateCodeSnippetById(codeSnippetId, codeSnippetData) {
  try {
    const codeSnippet = await CodeSnippet.findByIdAndUpdate(codeSnippetId, codeSnippetData, { new: true });
    return codeSnippet;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Delete code snippet by ID
async function deleteCodeSnippetById(codeSnippetId) {
  try {
    await CodeSnippet.findByIdAndDelete(codeSnippetId);
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  createCodeSnippet,
  getCodeSnippetById,
  updateCodeSnippetById,
  deleteCodeSnippetById
};
