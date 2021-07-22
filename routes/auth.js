const router = require("express").Router();
const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const passport = require("passport");

router.post("/signup", (req, res, next) => {
  const { username, password } = req.body;
  console.log("hi", req.body);

  User.findOne({ username: username }).then((userFromDB) => {
    if (userFromDB !== null) {
      return res
        .status(400)
        .json({ message: "This username is already taken" });
    } else {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync;
      console.log(hash);

      User.create({ username: username, password: hash })
        .then((createdUser) => {
          console.log(createdUser);
          req.login(createdUser, (err) => {
            if (err) {
              return res
                .status(500)
                .json({ message: "Sorry there is an error. Please try again" });
            } else {
              return res.status(200).json(createdUser);
            }
          });
        })
        .catch((err) => {
          res.json(err);
        });
    }
  });
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    if (err) {
      return res.status(400).json({ message: "Error! Please try again" });
    }
    if (!user) {
      return res.status(400).json({ message: "Wrong username or password" });
    }
    req.login(user, (err) => {
      if (err) {
        return res.status(500).json({ message: "Error! Please try again" });
      }
      return res.status(200).json(user);
    });
  })(req, res);
});

router.get("/loggedin", (req, res) => {
  console.log(req.user);
  res.json(req.user);
});

router.delete("/logout", (req, res) => {
  req.logout();
  res.status(200).json({ message: " You were succesfully logged out" });
});

module.exports = router;