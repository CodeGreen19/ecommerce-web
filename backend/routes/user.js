const express = require("express");
const passport = require("passport");
const {
  logout,
  allUser,
  addAndRemoveFavourite,
  getFavourite,
  updateUserRole,
  deleteUser,
} = require("../controllers/user");
const User = require("../models/user");
const { isUserExist } = require("../middlewares/auth.js");

const router = express.Router();
router.get(
  "/google/login",
  passport.authenticate("google", {
    scope: ["profile email"],
  })
);

router.get(
  "/login",
  passport.authenticate("google", { successRedirect: process.env.FRONTEND_URL })
);

// for development
// router.get("/me", async (req, res) => {
//   const user = await User.findById("659d08a6c335bb1a86962f0d");
//   req.user = user;
//   res.json({
//     success: true,
//     user,
//   });
// });

// main
router.get("/me", (req, res) => {
  res.json({
    success: true,
    user: req.user,
  });
});
router.get("/logout", logout);
router.get("/all", allUser);
router.put("/favourite/:id", isUserExist, addAndRemoveFavourite);
router.get("/favourite/all", isUserExist, getFavourite);
router.put("/update/:id", isUserExist, updateUserRole);
router.delete("/delete/:id", isUserExist, deleteUser);

module.exports = router;
