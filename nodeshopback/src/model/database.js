var Sequelize = require("sequelize");
// configuración de la base de datos, nombre, usuario, pass {host, tipo}
const sequelize = new Sequelize("node", "administrador", "MbInC9urOT*14@MbInC9urOT*14@", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;