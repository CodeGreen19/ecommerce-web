const express = require("express");
const {
  addToBag,
  cartItems,
  updateQty,
  deleteFromBag,
} = require("../controllers/cart");
const { isUserExist } = require("../middlewares/auth");
const router = express.Router();

router.post("/all", isUserExist, cartItems);
router.post("/addtobag", isUserExist, addToBag);
router.put("/qty", isUserExist, updateQty);
router.delete("/delete/:id", deleteFromBag);
module.exports = router;
