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

function list(table) {
  let query = `SELECT * FROM ${table} WHERE estado='1'`;
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

function get(table,id) {
  let idKey = Object.keys(id)[0]
  let idVal = Object.values(id)[0]

  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table} WHERE ${idKey}=${idVal} AND estado='1'`, (err, data) => {
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
//  console.log("data:",data)
  return new Promise((resolve, reject) => {
    connection.query(`UPDATE ${table} SET ? WHERE id=?`, [data, data.id], (err, result) => {
      if (err) return reject(err);
          resolve(result);
      })
  })
}

async function upsert(table, data) {
  console.log("aqui en upsert la data es: ",data)
  console.log("aqui en upsert la tabla es: ",table)
  let user = await get(table,{id:data.id})
  console.log("user:",user)
  if (user.length.length>0) {
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
  update,
  remove,
  get
};
