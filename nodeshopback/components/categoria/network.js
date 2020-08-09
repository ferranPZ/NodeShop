const express = require("express");
const multer = require("multer");

const config = require("../../config").api;
const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();

const upload = multer({
  dest: "public/" + config.filesRoute + "/",
});

router.get("/", function (req, res) {
  const filter_product = req.query.id || null;
  controller
    .getCategoria(filter_product)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, "Unexpected Error", 500, e);
    });
});

module.exports = router;
