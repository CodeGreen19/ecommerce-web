const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "please enter your first name"],
  },
  lastName: {
    type: String,
    required: [true, "please enter your last name"],
  },
  country: {
    type: String,
    required: [true, "please select your country name"],
  },
  state: {
    type: String,
    required: [true, "please select your state name"],
  },
  village: {
    type: String,
    required: [true, "please enter your village name"],
  },

  mobileNo: {
    type: Number,
    required: [true, "please enter your mobile number"],
  },
  price: {
    type: Number,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
    require: true,
  },
  road: {
    type: String,
  },

  pinCode: {
    type: Number,
  },
  paymentStatus: {
    type: String,
    default: "unpaid",
  },
  cartItems: [
    {
      name: { type: String, require: true },
      color: { type: String, require: true },
      qty: { type: Number, require: true },
      size: { type: String, require: true },
      img: { type: String, require: true },
      price: { type: String, require: true },
      productId: {
        type: mongoose.Schema.ObjectId,
        ref: "product",
        require: true,
      },
    },
  ],
  images: [
    {
      type: String,
      required: true,
    },
  ],

  status: {
    type: String,
    default: "processing",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("order", orderSchema);
