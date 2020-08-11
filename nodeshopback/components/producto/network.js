const express = require('express');
const multer = require('multer');

const config = require('../../config').api;
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

const upload = multer({
    dest: 'public/' + config.filesRoute + '/',
});

router.get('/', function (req, res) {
    //si se pasa por query(?idproduct=423471) devolvera solo ese productod de lo contrario los devolvera todos
    const filter_product = req.query.id || null;
    controller.getProduct(filter_product)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e);
        });
});



router.post('/', upload.single('file'), function (req, res) { 
    console.log(req.file)
    controller.addProduct(req.body.nombre, req.body.descripcion, req.body.unidades,req.body.valor,req.body.categoria_idcategoria, req.file)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201);    
        })
        .catch(e => {
            response.error(req, res, 'Informacion invalida', 400, 'Error en el controlaor');
        });

});


router.patch('/',upload.single('file'), function (req, res) {
    const filter_product = req.query.id || null;
    controller.updateProduct(filter_product,req.body.nombre,req.body.descripcion,req.body.unidades,req.body.valor,req.body.categoria_idcategoria, req.file)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e);
        });
});

router.delete('/', function(req, res) {
    controller.deleteProduct(req.query.id)
        .then(() => {
            response.success(req, res, `Producto ${req.query.id} eliminado`, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e);
        });
});

module.exports = router;