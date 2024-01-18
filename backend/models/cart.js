const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
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
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
    require: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("cart", cartSchema);
