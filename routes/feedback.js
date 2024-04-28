const express = require('express');
const router = express.Router();
const FeedbackController = require('../controller/feedback');
router.use(jwtAuthMiddleware)
// Create new feedback
router.post('/', function (req, res) { FeedbackController.createFeedback });

// Get feedback by ID
router.get('/:feedbackId', function (req, res) { FeedbackController.getFeedbackById });

// Update feedback by ID
router.put('/:feedbackId', function (req, res) { FeedbackController.updateFeedbackById });

// Delete feedback by ID
router.delete('/:feedbackId', function (req, res) { FeedbackController.deleteFeedbackById });

module.exports = router;
