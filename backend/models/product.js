const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter products name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "please enter description "],
  },
  price: {
    type: Number,
    required: [true, "please enter number"],
    maxLength: [12, "price cannot be up 8 character"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  color: {
    type: String,
    required: [true, "please give a color"],
  },
  brand: {
    type: String,
    required: [true, "please enter valid category"],
  },
  stock: [
    {
      size: { type: Number, required: true },
      qty: { type: Number, required: true },
    },
  ],
  numberOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "user",
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("product", productSchema);
