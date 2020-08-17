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

function insert(table, data) {
  return new Promise((resolve, reject) => {
      connection.query(`INSERT INTO ${table} SET ?`, data, (err, result) => {
          if (err) return reject(err);
          resolve(result);
      })
  })
}

function update(table, data) {
  console.log("data:",data)
  return new Promise((resolve, reject) => {
    connection.query(`UPDATE ${table} SET ? WHERE idadmin=?`, [data, data.idadmin], (err, result) => {
      if (err) return reject(err);
          resolve(result);
      })
  })
}

// cambiar idcategoria por id para hacerlo funcional con todos los componentes
function upsert(table, data) {
  //console.log("entro en upsert, data:",data)
  //console.log("entro en upsert, table:",table)
  if (data && data.idadmin) {
     console.log("update////////////////")
      return update(table, data);
  } else {
    console.log("isnert////////////////")
      return insert(table, data);
  }
}

function remove() {
  
}


module.exports = {
  list,
  upsert,
  remove
};
