import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    service: {
        type: mongoose.ObjectId,
        ref: "Product",
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("Review", ReviewSchema);
