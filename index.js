const express = require("express");
const session = require("express-session");
const dbConnect = require("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 3000;
const logger = require("morgan");
const path = require("path");
const methodOverride = require("method-override");
const multer = require("multer");
const nocache = require("nocache");
const passport = require("passport");
const flash = require("connect-flash");

dbConnect();

const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");

app.use("/uploads", express.static("uploads"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/uploads"); // 'uploads/' is the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    // Defining the file name for the uploaded file (we can customize this)
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: {
      sameSite: "strict",
      maxAge: 60 * 1000 * 60,
    },
  })
);

app.use(flash());

app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  next();
});

app.use(passport.initialize());
app.use(passport.session());

app.use(nocache());

app.use("/", userRoute);

app.use("/admin", adminRoute);

app.listen(PORT, () => {
  console.log(`server is running at PORT ${PORT}`);
});
