const mysql = require("mysql");
const config = require("../../config");

const dbconfig = {
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
};

let connection;

function handleCon() {
  connection = mysql.createConnection(dbconfig);
  connection.connect((error) => {
    if (error) {
      console.log("[db error]:", error);
      setTimeout(handleCon, 2000);
    } else {
      console.log("Conectado a la BD");
    }
  });
  connection.on("error", (error) => {
    console.log("[db error]:", error);
    if (error.code === "PROTOCOL_CONNECTION_LOST") {
      handleCon();
    } else {
      throw error;
    }
  });
}

handleCon();

function list(id_categoria) {
  let query;
  if (id_categoria) {
    query = `SELECT * FROM categoria WHERE idcategoria=${id_categoria} AND estado='1'`;
  } else {
    query = `SELECT * FROM categoria WHERE estado='1'`;
  }
  console.log("Listando categoria");
  return new Promise((resolve, reject) => {
    connection.query(query, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

module.exports = {
  list,
};
