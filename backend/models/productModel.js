import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User",
    },
    name: {
        type: String,
        require: true,
    },
    rating: {
        type: Number,
        require: true,
    }, 
    comment: {
        type: String,
        require: true,
    },
}, {
    timestamps: true,
})

const productSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User",
    },
    name: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    reviews: [reviewSchema],
    rating: {
        type: Number,
        required: true,
        default: 0,
    },
    numReviews: {
        type: Number,
        require: true,
        default: 0,
    },
    price: {
        type: Number,
        require: true,
        default: 0,
    },
    countInStock: {
        type: Number,
        require: true,
        default: 0,
    }
}, {
    timestamps: true,
});

const Product = mongoose.model("Product", productSchema);

export default Product;