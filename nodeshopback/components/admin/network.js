//express s s
const express = require("express");


const config = require("../../config").api;
const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();


router.get('/',liset);
router.post('/',upsert);
router.put('/',upsert);
router.delete('/',remove);






function liset(req,res) {
    if (req.query.id){
        get(req, res)
    }else{
        list(req, res)
    }
}


function list(req, res) {
  console.log("entro en network list")
    controller.list(req,res)
      .then((data) => {
        response.success(req, res, data, 200);
      })
      .catch((e) => {
        response.error(req, res, "Unexpected Error", 500, e);
      });
  }
  

function get(req, res) {
  controller.get(req,res)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, "Unexpected Error", 500, e);
    });
}



function upsert(req, res) { 
    controller.upsert(req,res)
        .then((details) => {
            response.success(req, res, "Post existoso", 201, details);    
        })
        .catch(e => {
            response.error(req, res, 'Informacion invalida', 400, 'Error en el controlaor');
        });
}



function remove(req,res,next) {
  controller.remove(req)
    .then((details) => {
      response.success(req, res, "remove existoso", 201, details);    
    })
    .catch(e => {
        response.error(req, res, 'Informacion invalida', 400, 'Error en el controlaor');
    });
}

module.exports = router;
