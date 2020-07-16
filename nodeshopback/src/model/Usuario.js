const Sequelize = require("sequelize");
var sequelize = require("./database");
//import role fk

var Role = require("./Role");
var nametable = "usuario";

var Usuario = sequelize.define(nametable, {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  address: Sequelize.STRING,
  phone: Sequelize.BIGINT,
  //Fk
  roleId: {
    type: Sequelize.INTEGER,
    references: {
      model: Role,
      key: "id",
    },
  },
});

Usuario.belongsTo(Role);
module.exports = Usuario;
