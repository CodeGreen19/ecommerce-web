const tryCatchHandler = require("../middlewares/tryCatchHandler.js");
const Product = require("../models/product.js");
const { uploadImage, deleteImage } = require("../utils/uploadImg.js");
const ErrorHandler = require("../middlewares/error.js");

const { filter } = require("../utils/filter.js");

exports.createProduct = tryCatchHandler(async (req, res) => {
  const {
    name,
    description,
    color,
    price,
    stock,
    category,
    height,
    user,
    productImages,
  } = req.body;
  // const toUploadImages = req.body.formData;

  const images = [];

  for (let index = 0; index < productImages.length; index++) {
    const data = await uploadImage(productImages[index].image);
    images.push({ public_id: data.public_id, url: data.secure_url });
  }
  const newProducts = await Product.create({
    name,
    description,
    category,
    color,
    price,
    stock,
    height,
    user,
    images,
  });
  res.status(201).json({
    success: true,
    message: "product created",
    newProducts,
  });
});

// update product
exports.updateProduct = tryCatchHandler(async (req, res) => {
  const { name, description, price, existImg, removedImg, stock, newImages } =
    req.body;
  // const toUploadImages = req.body.formData;

  //destroy removed image
  if (removedImg) {
    for (let index = 0; index < removedImg.length; index++) {
      await deleteImage(removedImg[index].public_id);
    }
  }
  const images = [];

  // newImages upload
  for (let index = 0; index < newImages.length; index++) {
    const data = await uploadImage(newImages[index].image);
    images.push({ public_id: data.public_id, url: data.secure_url });
  }
  if (existImg) {
    existImg.forEach((item) => {
      images.push(item);
    });
  }
  const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
    name,
    description,
    price,
    stock,
    images,
  });
  res.status(201).json({
    success: true,
    message: "product updated successfully",
    updatedProduct,
  });
});

exports.getAllProduct = tryCatchHandler(async (req, res) => {
  const allProducts = await Product.find();
  res.status(201).json({
    success: true,
    allProducts,
    user: req.user,
  });
});

// get filtered products
exports.getFilteredProduct = tryCatchHandler(async (req, res) => {
  let query = await filter(req.query);
  const filteredProducts = await Product.find(query);

  res.status(201).json({
    success: true,
    filteredProducts,
  });
});
exports.getSingleProduct = tryCatchHandler(async (req, res) => {
  const singleProduct = await Product.findById(req.params.id);

  res.status(200).json({
    success: true,
    singleProduct,
  });
});

// give reviews
exports.giveReviews = tryCatchHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  const { ratings, comment } = req.body;
  const { name, _id } = req.user;

  if (!name || !_id) {
    return next(new ErrorHandler("please login first", 401));
  }
  if (!ratings || !comment) {
    return next(new ErrorHandler("please fill all the fields", 401));
  }
  product.reviews.push({
    user: _id,
    name,
    rating: ratings,
    comment,
  });

  // update ratings
  let newRatings = 0;
  product.reviews.forEach((item) => {
    newRatings += item.rating;
  });
  product.numberOfReviews = product.reviews.length;
  product.ratings = newRatings / product.numberOfReviews;

  await product.save();
  res.status(200).json({
    success: true,
    message: "reviews added successfully",
    product,
  });
});

// delete single product
exports.deleteSingleProduct = tryCatchHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("delete product not found", 404));
  }

  if (product.images.length > 0) {
    for (let index = 0; index < product.images.length; index++) {
      await deleteImage(product.images[index].public_id);
    }
  }

  await product.deleteOne();

  res.status(200).json({
    success: true,
    message: "product deleted successfully",
  });
});
