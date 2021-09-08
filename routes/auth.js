const router = require("express").Router();
const User = require("../models/User.model");
const Specialist = require("../models/Specialist.model");
const bcrypt = require("bcrypt");
const passport = require("passport");

// Routes for the client

router.post("/signup", (req, res, next) => {
  const { email, username, password } = req.body;

  User.findOne({ username: username }).then((userFromDB) => {
    if (userFromDB !== null) {
      return res
        .status(400)
        .json({ message: "This username is already taken" });
    } else {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync(password, salt);

      User.create({
        email: email,
        username: username,
        password: hash,
        name: "",
        lastname: "",
      })
        .then((createdUser) => {
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
  passport.authenticate("client", (err, user) => {
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

//End of routes for the Client

// Routes for the Specialist
router.post("/specialist-signup", (req, res, next) => {
  const { email, username, name, lastname, password } = req.body;
  console.log("hi", req.body);

  Specialist.findOne({ username: username }).then((userFromDB) => {
    if (userFromDB !== null) {
      return res
        .status(400)
        .json({ message: "This username is already taken" });
    } else {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync(password, salt);
      console.log(hash);

      Specialist.create({
        username: username,
        password: hash,
        name: name,
        lastname: lastname,
        avatar: "",
        bio: "",
        phone: "",
        email: email,
        serviceType: "",
        servicePrice: "",
      })
        .then((createdUser) => {
          console.log("createdUser", createdUser);
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

router.post("/specialist-login", (req, res, next) => {
  console.log("specialistLogin");
  passport.authenticate("specialist", (err, user) => {
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

// End of routes for the specialist

router.get("/loggedin", (req, res) => {
  console.log(req.user);
  res.json(req.user);
});

router.delete("/logout", (req, res) => {
  req.logout();
  res.status(200).json({ message: "You were succesfully logged out" });
});

router.get("/profile", (req, res) => {
  console.log(req.role);
  console.log(req.id);
});

module.exports = router;
