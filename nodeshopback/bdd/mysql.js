const mysql = require("mysql");
const config = require("../config");

let connection;

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
};

function handleCon() {
    console.log("Conectando..")
  connection = mysql.createConnection(dbconfig);

  connection.connect((error) => {
    if (error) {
      console.log("[db error]:", error);
      setTimeout(() => {
        handleCon()
      }, 2000);
    } else {
      console.log("Conectado a la BD");
      return connection;
    }
  });

  connection.on("error", (error) => {
    console.log("[db error]:", error);
    if (error.code === "PROTOCOL_CONNECTION_LOST") {
      setTimeout(() => {
        handleCon()
      }, 5000);
      
    } else {
      throw error;
    }

  });


}

handleCon();

module.exports = {connection}