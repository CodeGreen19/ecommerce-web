const express = require("express");
const passport = require("passport");
const { logout, allUser } = require("../controllers/user");
const {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteSingleProduct,
  getFilteredProduct,
  giveReviews,
} = require("../controllers/product");
const { isUserExist } = require("../middlewares/auth");

const router = express.Router();
router.post("/create/new", createProduct);
router.get("/all", getAllProduct);
router.get("/filter", getFilteredProduct);
router.get("/single/:id", getSingleProduct);
router.put("/update/:id", updateProduct);
router.put("/review/:id", isUserExist, giveReviews);

// for admin
router.delete("/delete/:id", deleteSingleProduct);

module.exports = router;
