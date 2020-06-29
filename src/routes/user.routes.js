const router = require("express").Router();
const bcrypt = require("bcrypt");
const USER_MODEL = require("../models/user.model");
const { json } = require("express");

router.post("/signup", (req, res) => {
  const { nickname, email, password } = req.body;

  console.log(req.body)

  let passwordHash = bcrypt.hashSync(password, 10);

  const NEW_USER = new USER_MODEL({
    nickname,
    email,
    password: passwordHash,
  });

  NEW_USER.save()
    .then((user) => {
      res.json({
        ok: true,
        data: user,
        message: "User create",
      });
    })
    .catch((err) => {
      res.json({ ok: false, data: [], message: err });
    });
});

router.post("/signin", (req, res) => {
  const { email, password } = req.body;

  USER_MODEL.findOne({ email }, (err, user) => {
    if (err)
      return res.json({
        ok: false,
        data: [],
        message: "Error to search user email",
      });

    if (user == null) {
      return res.json({
        ok: false,
        data: [],
        message: "User no found",
      });
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return res.json({
        ok: false,
        data: [],
        message: "Password invalid",
      });
    }

    return res.json({
      ok: true,
      data: user,
      message: "YOUR ARE JOINED",
    });
  });
});

module.exports = router;
