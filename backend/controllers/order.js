const Order = require("../models/order");
const tryCatchHandler = require("../middlewares/tryCatchHandler.js");
const ErrorHandler = require("../middlewares/error.js");

// store in data
exports.createOrder = tryCatchHandler(async (req, res, next) => {
  const {
    firstName,
    lastName,
    village,
    road,
    price,
    productName,
    qty,
    country,
    state,
    mobileNo,
    pinCode,
    cartItems,
  } = req.body;
  if ((!firstName, !lastName, !village, !country, !state, !mobileNo)) {
    return next(new ErrorHandler("please fill all the fields", 404));
  }

  const order = await Order.create({
    userId: req.user._id,
    firstName,
    lastName,
    price,
    productName,
    qty,
    village,
    road,
    country,
    state,
    mobileNo,
    pinCode,
    cartItems,
  });
  res.status(200).json({
    success: true,
    message: "Order created successfully",
    order,
  });
});
// store in data
exports.myOrders = tryCatchHandler(async (req, res, next) => {
  const orders = await Order.find({ userId: req.user });
  if (!orders) {
    next(new ErrorHandler("order not found", 401));
  }

  res.status(200).json({
    success: true,
    orders,
  });
});
// store in data
exports.updateStatus = tryCatchHandler(async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    next(new ErrorHandler("order not found", 401));
  }
  if (!req.body.status || req.body.status === "processing") {
    next(new ErrorHandler("please change Status", 401));
  }
  order.status = req.body.status;
  await order.save();
  res.status(200).json({
    success: true,
    message: "Status updated",
  });
});
// store in data
exports.deleteOrder = tryCatchHandler(async (req, res, next) => {
  await Order.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    message: "Delete Order",
  });
});
// store in data
exports.allOrders = tryCatchHandler(async (req, res, next) => {
  const orders = await Order.find();
  res.status(200).json({
    success: true,
    orders,
  });
});
