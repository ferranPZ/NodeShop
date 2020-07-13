const express = require("express");
const router = express.Router();

//llamando al controlador usuario
const UsuarioController = require("../controllers/UsuarioController");
//const { Router } = require("express");

router.get('/list',UsuarioController.list);



/*
routes.get("/datatest", UsuarioController.testdata);
routes.get("/test", UsuarioController.test);

//aqui al llamar /usuario/save desde la url entrega el siguiente mensaje
routes.get("/save", (req, res) => {
  //(request->req y response->res)
  res.json({
    status: "Usuario guardado",
  });
});
*/
module.exports = router;
