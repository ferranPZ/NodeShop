const mysql = require("mysql");
const config = require("../config");

let connection;

const dbconfig = {
    connectionLimit : 100,
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
};

function handleCon() {
  console.log("Conectando..")
  //connection = mysql.createConnection(dbconfig);
  connection =  mysql.createPool(dbconfig);

  connection.getConnection((error,connection) => {
    if (error) {
      console.log("[db error]:", error);
      setTimeout(() => {
        handleCon()
      }, 2000);
     //return error;
    } else {
      console.log("Conectado a la BD");
      //return connection;
    }
    connection.release();
  });

  connection.on("error", (error) => {
    console.log("[db error]:", error);
    if (error.code === "PROTOCOL_CONNECTION_LOST") {
      setTimeout(() => {
        handleCon()
      }, 5000);
      
    } else {
      console.log("error no manejado")
      throw error;
    }

  });


}

handleCon();

module.exports = {connection}