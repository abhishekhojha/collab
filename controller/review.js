let Review = require("../models/Review.js")

// Create a new review
async function createReview(req, res) {
  try {
    const review = await Review.createReview(req.body);
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Get review by ID
async function getReviewById(req, res) {
  try {
    const review = await Review.getReviewById(req.params.reviewId);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Update review by ID
async function updateReviewById(req, res) {
  try {
    const review = await Review.updateReviewById(req.params.reviewId, req.body, { new: true });
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.json(review);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Delete review by ID
async function deleteReviewById(req, res) {
  try {
    const review = await Review.deleteReviewById(req.params.reviewId);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.json({ message: 'Review deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createReview,
  getReviewById,
  updateReviewById,
  deleteReviewById
};
