const connection = require('../../bdd/mysql').connection; 


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
    connection.query(`UPDATE ${table} SET ? WHERE idcategoria=?`, [data, data.idcategoria], (err, result) => {
      if (err) return reject(err);
          resolve(result);
      })
  })
}

function upsert(table, data) {
  if (data && data.idcategoria) {
      return update(table, data);
  } else {
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
