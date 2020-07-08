const path = require("path");
const router = require("express").Router();

//View Routes
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  //default route
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

module.exports = router;

