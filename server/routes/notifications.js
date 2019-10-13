const express = require("express");
const { User } = require("../models/user");
const router = express.Router();
const auth = require("../middleware/auth");
const notifier = require("node-notifier");
const path = require("path");

router.post("/", auth, async (req, res) => {
  let user = await User.findOne({ _id: req.user._id });
  if (!user) return res.status(400).send("There is no user with this id.");

  try {
    notifier.notify({
      title: "OptimizeApp",
      message:
        "W twoim projekcie pojawiło się nowe zapytanie! Koniecznie sprawdź co to i pomóż swojemu koledze z zespołu. ",
      icon: path.join(__dirname, "../../client/public/logo.png"),
      sound: true
    });
    res.status(200);
    res.send("Message has been sent.");
  } catch (ex) {
    res.status(500).send(ex.message);
  }
});

module.exports = router;
