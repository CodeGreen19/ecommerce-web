const express = require("express");
const {
  createOrder,
  updateStatus,
  myOrders,
  allOrders,
  deleteOrder,
} = require("../controllers/order");
const { isUserExist } = require("../middlewares/auth");

const router = express.Router();

router.get("/myorders", isUserExist, myOrders);
router.post("/create", isUserExist, createOrder);
router.put("/update/:id", updateStatus);
router.delete("/delete/:id", deleteOrder);

// admin orders
router.get("/all", allOrders);

module.exports = router;
