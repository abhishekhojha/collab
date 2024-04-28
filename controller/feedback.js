const Feedback = require('../models/feedback');

// Create new feedback
async function createFeedback(req, res) {
  try {
    const feedback = await Feedback.createFeedback(req.body);
    res.status(201).json(feedback);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Get feedback by ID
async function getFeedbackById(req, res) {
  try {
    const feedback = await Feedback.getFeedbackById(req.params.feedbackId);
    if (!feedback) {
      return res.status(404).json({ message: 'Feedback not found' });
    }
    res.json(feedback);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Update feedback by ID
async function updateFeedbackById(req, res) {
  try {
    const feedback = await Feedback.updateFeedbackById(req.params.feedbackId, req.body, { new: true });
    if (!feedback) {
      return res.status(404).json({ message: 'Feedback not found' });
    }
    res.json(feedback);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Delete feedback by ID
async function deleteFeedbackById(req, res) {
  try {
    const feedback = await Feedback.deleteFeedbackById(req.params.feedbackId);
    if (!feedback) {
      return res.status(404).json({ message: 'Feedback not found' });
    }
    res.json({ message: 'Feedback deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createFeedback,
  getFeedbackById,
  updateFeedbackById,
  deleteFeedbackById
};
