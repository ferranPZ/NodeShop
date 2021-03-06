//express s s
const express = require("express");
const secure = require('./segure')

const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();


router.get('/',get);
router.post('/',secure('upsert'),upsert);
router.put('/',secure('upsert'),upsert);
router.delete('/',remove);


function get(req, res) {
  const filter_product = req.query.id || null;
  controller
    .getCategoria(filter_product)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, "Unexpected Error", 500, e);
    });
}


function upsert(req, res) { 
    controller.upsert(req)
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
