const express = require("express");
const passport = require("passport");
const { logout, allUser } = require("../controllers/user");

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
router.get("/me", (req, res) => {
  res.json({
    success: true,
    user: req.user,
  });
});
router.get("/logout", logout);
router.get("/all", allUser);

module.exports = router;
