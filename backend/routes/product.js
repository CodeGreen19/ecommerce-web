const express = require("express");
const passport = require("passport");
const { logout, allUser } = require("../controllers/user");
const {
  createProduct,
  getAllProduct,
  getSingleProduct,
} = require("../controllers/product");

const router = express.Router();
router.get("/create/new", createProduct);
router.get("/all", getAllProduct);
router.get("/single/:id", getSingleProduct);

module.exports = router;
