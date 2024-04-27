const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    reviewId: { type: mongoose.Schema.Types.ObjectId, ref: 'Review', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;


// Create new feedback
async function createFeedback(feedbackData) {
    try {
        const feedback = await Feedback.create(feedbackData);
        return feedback;
    } catch (error) {
        throw new Error(error.message);
    }
}

// Read feedback by ID
async function getFeedbackById(feedbackId) {
    try {
        const feedback = await Feedback.findById(feedbackId);
        return feedback;
    } catch (error) {
        throw new Error(error.message);
    }
}

// Update feedback by ID
async function updateFeedbackById(feedbackId, feedbackData) {
    try {
        const feedback = await Feedback.findByIdAndUpdate(feedbackId, feedbackData, { new: true });
        return feedback;
    } catch (error) {
        throw new Error(error.message);
    }
}

// Delete feedback by ID
async function deleteFeedbackById(feedbackId) {
    try {
        await Feedback.findByIdAndDelete(feedbackId);
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    createFeedback,
    getFeedbackById,
    updateFeedbackById,
    deleteFeedbackById
};
