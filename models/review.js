const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    snippetId: { type: mongoose.Schema.Types.ObjectId, ref: 'CodeSnippet', required: true },
    reviewerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    comments: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    createdAt: { type: Date, default: Date.now }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;

// CRUD operations with validation

// Create a new review
async function createReview(reviewData) {
    try {
        const review = await Review.create(reviewData);
        return review;
    } catch (error) {
        throw new Error(error.message);
    }
}

// Read review by ID
async function getReviewById(reviewId) {
    try {
        const review = await Review.findById(reviewId);
        return review;
    } catch (error) {
        throw new Error(error.message);
    }
}

// Update review by ID
async function updateReviewById(reviewId, reviewData) {
    try {
        const review = await Review.findByIdAndUpdate(reviewId, reviewData, { new: true });
        return review;
    } catch (error) {
        throw new Error(error.message);
    }
}

// Delete review by ID
async function deleteReviewById(reviewId) {
    try {
        await Review.findByIdAndDelete(reviewId);
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    createReview,
    getReviewById,
    updateReviewById,
    deleteReviewById
};
