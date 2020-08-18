//express s s
const express = require("express");
const config = require("../../config").api;
const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();


router.post('/',login)


function login(req,res) {
    controller.login(req,res)
      .then((data) => {
        response.success(req, res, data, 200);
      })
      .catch((e) => {
        response.error(req, res, "Unexpected Error", 404, e);
      });
  }


  
module.exports = router;
