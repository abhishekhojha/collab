const express = require('express');
const router = express.Router();
const ReviewController = require('../controller/review');
const jwtAuthMiddleware = require("../auth/JWT")
router.use(jwtAuthMiddleware)
// Create a new review
router.post('/', function (req, res) { ReviewController.createReview });

// Get review by ID
router.get('/:reviewId', function (req, res) { ReviewController.getReviewById });

// Update review by ID
router.put('/:reviewId', function (req, res) { ReviewController.updateReviewById });

// Delete review by ID
router.delete('/:reviewId', function (req, res) { ReviewController.deleteReviewById });

module.exports = router;