require("dotenv").config();
const User = require("../models/userModel");

// Checks if a user is logged in (either via session or Passport/Google OAuth)
const isLogin = async (req, res, next) => {
  try {
    if (req.session.email || req.isAuthenticated()) {
      console.log("session is: active");
      next();
    } else {
      console.log("session is: not-active");
      req.session.redirectTo = req.originalUrl;
      res.redirect("/login");
    }
  } catch (error) {
    console.log(error.message);
    res.redirect("/500");
  }
};

// Checks if the user's account is blocked/deactivated
const isBlocked = async (req, res, next) => {
  try {
    // Support both session-based and Passport-based (Google OAuth) auth
    const email = req.session.email || (req.user && req.user.email);

    if (!email) {
      return next(); // No user found — isLogin will handle redirect
    }

    const userData = await User.findOne({ email });

    if (userData && userData.is_active === false) {
      req.session.destroy();
      if (req.logout) req.logout(() => { });
      return res.redirect("/login?message=blocked");
    }

    next();
  } catch (error) {
    console.log(error.message);
    next();
  }
};

// Redirects already-logged-in users away from login/signup pages
const isLogout = async (req, res, next) => {
  try {
    if (req.session.email || req.isAuthenticated()) {
      res.redirect("/");
    } else {
      next();
    }
  } catch (error) {
    console.log(error.message);
    next();
  }
};

module.exports = {
  isLogin,
  isBlocked,
  isLogout,
};
