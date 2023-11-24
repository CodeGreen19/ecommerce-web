const User = require("../models/user");
const tryCatchHandler = require("../middlewares/tryCatchHandler.js");

exports.logout = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) return next(err);
    res.clearCookie("connect.sid", {
      secure: false,
      httpOnly: false,
      sameSite: false,
    });
    res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  });
};
exports.allUser = tryCatchHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    success: true,
    users,
  });
});
