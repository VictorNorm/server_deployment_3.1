var express = require("express");
var router = express.Router();
const fs = require("fs");
var path = require("path");

// Or
/* GET pictures listing. */
router.get("/", function (req, res, next) {
  const pictures = fs.readdirSync(path.join(__dirname, "../pictures/"));
  res.render("pictures", { pictures: pictures });
});

router.get("/:pictureName", function (req, res, next) {
  // const name = req.params;
  // const pictures = fs.readdirSync(path.join(__dirname, "../pictures/"));
  // let picture = pictures.find((picture) => picture == name);
  // if (!picture) {
  //   picture == null;
  // }
  res.render("pictureDetails", { picture: req.params.pictureName });
});

router.post("/", function (req, res, next) {
  const file = req.files.file;
  fs.writeFileSync(path.join(__dirname, "../pictures/", file.name), file.data);
  res.end();
});

module.exports = router;
