const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter your name"],
    maxLength: [30, " name should not more than 30 character"],
    minLength: [4, "name should not be less than 4 character"],
  },
  email: {
    type: String,
    required: [true, "enter your email address"],
    unique: true,
  },

  googleId: { type: String },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  favourite: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "product",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("user", userSchema);
