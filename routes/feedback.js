const express = require('express');
const router = express.Router();
const FeedbackController = require('../controller/feedback');

// Create new feedback
router.post('/', FeedbackController.createFeedback);

// Get feedback by ID
router.get('/:feedbackId', FeedbackController.getFeedbackById);

// Update feedback by ID
router.put('/:feedbackId', FeedbackController.updateFeedbackById);

// Delete feedback by ID
router.delete('/:feedbackId', FeedbackController.deleteFeedbackById);

module.exports = router;
