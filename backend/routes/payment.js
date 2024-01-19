const express = require("express");
const tryCatchHandler = require("../middlewares/tryCatchHandler");
const Order = require("../models/order");
const Cart = require("../models/cart");
const router = express.Router();
// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_PUBLISHABLE_KEY);

// checkout the payment
router.post("/checkout", async (req, res) => {
  const { qty, ammount, orderId } = req.body;
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "USD",
          product_data: { name: `${qty} products` },
          unit_amount: ammount * 100,
        },
        quantity: qty,
      },
    ],

    mode: "payment",
    success_url: `${process.env.FRONTEND_URL}payment/success/${orderId}`,
    cancel_url: `${process.env.FRONTEND_URL}payment/cancel`,
  });

  res.json({ url: session.url });
});
// checkout the payment
router.get(
  "/success/:id",
  tryCatchHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    order.paymentStatus = "paid";

    order.cartItems.forEach(async (id) => {
      await Cart.findByIdAndDelete(id);
    });
    await order.save();

    res.redirect(`${process.env.FRONTEND_URL}payment/success`);
  })
);

module.exports = router;
