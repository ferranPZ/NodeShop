const controllers = {};
//importar modelo
var sequelize = require("../model/database");

const Role = require("../model/Role");
const Usuario = require("../model/Usuario");

sequelize.sync();

controllers.list = async (req, res) => {
  const data = await Usuario.findAll({
    include: [Role],
  })
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      return error;
    });
  res.json({ success: true, data: data });
};

controllers.create = async (req, res) => {
 
  // data
  const { name, email, address, phone, role } = req.body;
  // create
  const data = await Usuario.create({
    name: name,
    email: email,
    address: address,
    phone: phone,
    roleId: role,
  })
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      console.log("Error  " + error);
      return error;
    });
  // return res
  res.status(200).json({
    success: true,
    message: "Guardo exitosamente",
    data: data,
  });
};

controllers.get = async (req,res) => {
  const { id } = req.params;
  const data = await Usuario.findAll({
      where: { id: id },
      include: [ Role ]
  })
  .then(function(data){
    return data;
  })
  .catch(error =>{
    return error;
  })
  res.json({ success: true, data: data });
}

/*
controllers.testdata = async (req, res) => {
  const response = await sequelize
    .sync()
    .then(function () {
      //creacion de datos de prueba
     
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
*/
module.exports = controllers;
