const router = require("express").Router();
const Specialist = require("../models/Specialist.model");

router.get("/", (req, res, next) => {
  Specialist.find()
    .then((specialists) => {
      res.status(200).json(specialists);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
