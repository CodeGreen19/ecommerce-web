const express = require("express");
const { urlencoded } = require("express");
const passport = require("passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const path = require("path");
const errorMiddleware = require("./middlewares/errorMiddleware.js");
const { connectPassport } = require("./utils/passport.js");
// require env variables
require("dotenv").config({ path: "backend/config/config.env" });

// cross origin errors
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
// Using Middlewares
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(cookieParser());
app.use(express.static("public"));
app.use(express.json({ limit: "100mb" }));
app.use(
  express.urlencoded({
    limit: "100mb",
    extended: true,
  })
);

// use passport
app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());

// passport connect
connectPassport();

// import router
const userRoute = require("./routes/user.js");
const productRoute = require("./routes/product.js");
const cartRoute = require("./routes/cart.js");
const orderRoute = require("./routes/order.js");
const paymentRoute = require("./routes/payment.js");
// router use
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);
app.use("/api/payment", paymentRoute);

// error middleware
app.use(errorMiddleware);

//  deployment code

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

module.exports = app;
