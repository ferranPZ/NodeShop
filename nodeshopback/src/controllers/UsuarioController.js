const controllers = {};
//importar modelo
var sequelize = require("../model/database");
var sequelize = require("../model/Role");
var sequelize = require("../model/Usuario");
//importante, la table usuario tiene una foranea de roles x ello se debe escribir abajo de ella
const Usuario = require("../model/Usuario");
const Role = require("../model/Role");

controllers.testdata = async (req, res) => {
  const response = await sequelize
    .sync()
    .then(function () {
      //creacion de datos de prueba
     /*
      Role.create({
        role: "Admin",
      });
      Usuario.create({
        name: "Juan Pedro",
        email: "juanpedro@gmail.com",
        address: "Concepcion 758 Av. Carrera",
        phone: "12345879256",
        roleId: 1,
      });
 */
      const data = Usuario.findAll(); //todos los datos de la table
      return data;
    })
    .catch((error) => {
      return error;
    });
  res.json({ response: true, data: response });
};

//aqui si se llama el metodo test, entrega el siguiente data
//se puede llamar desde la url /usuario/test
controllers.test = (req, res) => {
  const data = {
    name: "Felipe Espinoza",
    age: 25,
    ciudad: "Concepción",
  };
  console.log("Enviado desde el controlador usuario");
  res.json(data);
};

module.exports = controllers;
