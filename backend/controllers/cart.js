const User = require("../models/user");
const tryCatchHandler = require("../middlewares/tryCatchHandler.js");
const ErrorHandler = require("../middlewares/error.js");
const Cart = require("../models/cart.js");
const Product = require("../models/product.js");

// store in data
exports.cartItems = tryCatchHandler(async (req, res) => {
  const cartItems = await Cart.find({ userId: req.user._id });
  let subtotal = 0;
  let shippingCost = 15;
  let count = cartItems.length;

  cartItems.forEach((item) => {
    subtotal = Number(item.price) + Number(subtotal);
  });
  let tax = Math.round((subtotal * 15) / 100);
  subtotal = Number(subtotal);
  let total = subtotal + tax + shippingCost;
  let summery = {
    subtotal,
    shippingCost,
    tax,
    total,
    count,
  };
  res.status(200).json({
    success: true,
    cartItems,
    summery,
  });
});
// store in data
exports.addToBag = tryCatchHandler(async (req, res, next) => {
  const { name, color, img, qty, price, size, productId } = req.body;

  if (!size) {
    return next(new ErrorHandler("please select a size", 401));
  }

  const cartItem = await Cart.find({ userId: req.user });
  cartItem.forEach((item) => {
    if (item.productId.toString() === productId.toString()) {
      if (item.size === size) {
        return res.status(200).json({
          success: true,
          message: "product already exists to bag",
        });
      }
    }
  });

  let storedInBag = {
    userId: req.user,
    name,
    img,
    color,
    qty,
    price,
    size,
    productId,
  };
  const cart = await Cart.create(storedInBag);
  // update product stock
  const product = await Product.findById(productId);

  let qtyIndex;
  product.stock.forEach((pro, index) => {
    if (pro.size.toString() === size.toString()) {
      return (qtyIndex = index);
    }
  });
  product.stock[qtyIndex].qty -= 1;
  await product.save();

  res.status(200).json({
    success: true,
    message: "product added to bag",
    cart,
  });
});

// update quantity
exports.updateQty = tryCatchHandler(async (req, res, next) => {
  const { size, productId, action, itemId } = req.body;
  // find product
  const product = await Product.findById(productId);

  let qty;
  let qtyIndex;
  product.stock.forEach((pro, index) => {
    if (pro.size.toString() === size.toString()) {
      qty = pro.qty;
      qtyIndex = index;
      return;
    }
  });
  const cartItem = await Cart.findById(itemId);

  if (action === "increase") {
    cartItem.qty += 1;
  }
  if (action === "decrease" && cartItem.qty > 1) {
    cartItem.qty -= 1;
  }

  if (cartItem.qty <= qty && action === "increase") {
    product.stock[qtyIndex].qty -= 1;
    await cartItem.save();
    await product.save();
  } else if (cartItem.qty <= qty && action === "decrease") {
    product.stock[qtyIndex].qty += 1;
    await cartItem.save();
    await product.save();
  }

  // // cart
  // const cart = await Cart.find({ userId: req.user._id });
  // if (!cart) {
  //   return next(new ErrorHandler("cart Item not found", 401));
  // }
  // cart.forEach(async (item, i) => {

  //   if (item._id.toString() === itemId.toString()) {
  //     if (action === "increase") {
  //       cart[i].qty += 1;
  //     } else if (action === "decrease" && cart[i].qty > 1) {
  //       cart[i].qty -= 1;
  //     }

  //     // Save the updated cart item
  //     await cart[i].save();
  //   }
  // });

  res.status(200).json({
    success: true,
  });
});

// update quantity
exports.deleteFromBag = tryCatchHandler(async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    message: "remove from cart",
  });
});
