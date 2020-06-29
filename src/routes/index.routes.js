const router = require("express").Router();

router.get("/", (req, res) => {
  res.sendFile("index.html");
});

// Auth
router.use(require("./user.routes"));

module.exports = router