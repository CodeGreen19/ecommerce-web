const tryCatchHandler = require("../middlewares/tryCatchHandler.js");
const Product = require("../models/product.js");
const { uploadImage } = require("../utils/uploadImg.js");
const ErrorHandler = require("../middlewares/error.js");

exports.createProduct = tryCatchHandler(async (req, res) => {
  const { name, description, color, price, stock, brand, user, productImages } =
    req.body;
  // const toUploadImages = req.body.formData;

  const images = [];
  for (let index = 0; index < productImages.length; index++) {
    const data = await uploadImage(productImages[index].image);
    images.push({ public_id: data.public_id, url: data.secure_url });
  }
  const newProducts = await Product.create({
    name,
    description,
    color,
    price,
    stock,
    brand,
    user,
    images,
  });
  res.status(201).json({
    success: true,
    message: "product created",
    newProducts,
  });
});

exports.getAllProduct = tryCatchHandler(async (req, res) => {
  const allProducts = await Product.find();
  res.status(201).json({
    success: true,
    message: "product created",
    allProducts,
  });
});
exports.getSingleProduct = tryCatchHandler(async (req, res) => {
  const singleProduct = await Product.findById(req.params.id);
  if (!singleProduct) {
    return next(new ErrorHandler("products not found", 404));
  }

  res.status(200).json({
    success: true,
    singleProduct,
  });
});
