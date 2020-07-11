const Sequelize = require("sequelize");
var sequelize = require("./database");

var nametable = "role"; //nombre de la tabla
var Role = sequelize.define(
  nametable,
  {
    role: Sequelize.STRING,
  },
  {}
);

module.exports = Role;
