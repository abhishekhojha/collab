const express = require('express');
const router = express.Router();
const ReviewController = require('../controller/review');

// Create a new review
router.post('/', ReviewController.createReview);

// Get review by ID
router.get('/:reviewId', ReviewController.getReviewById);

// Update review by ID
router.put('/:reviewId', ReviewController.updateReviewById);

// Delete review by ID
router.delete('/:reviewId', ReviewController.deleteReviewById);

module.exports = router;
