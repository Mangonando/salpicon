const router = require("express").Router();
const User = require("../models/User.model");
const Specialist = require("../models/Specialist.model");

router.put("/user", (req, res, next) => {
  const { username, name, lastname, email } = req.body;
  User.findByIdAndUpdate(req.user._id, { username, name, lastname, email }, {new: true})
    .then((user) => {
      req.user = user;
      res.status(200).json(user);
    })
    .catch((err) => {
      next(err);
    });
});

router.put("/specialist", (req, res, next) => {
  const {
    username,
    id,
    name,
    lastname,
    email,
    phone,
    bio,
    serviceType,
    servicePrice,
  } = req.body;
  Specialist.findByIdAndUpdate(id, {
    username,
    name,
    lastname,
    email,
    phone,
    bio,
    serviceType,
    servicePrice,
  }, {new: true})

    .then((user) => {
      req.user = user;
      res.status(200).json(user);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
