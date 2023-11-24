exports.isUserExist = (req, res, next) => {
  const user = req.user;
  console.log("user", user);

  if (user) {
    res.status(200).json({
      success: true,
      message: "user exists",
    });
  } else {
    res.status(201).json({
      success: false,
      message: "user does not exist",
    });
  }
};
