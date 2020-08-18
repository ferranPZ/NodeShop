const connection = require('../../bdd/mysql').connection; 


function list(table) {
  console.log("entro en list")
  let query = `SELECT * FROM ${table} WHERE estado='1'`;
  console.log("entro en list 22 2")
  return new Promise((resolve, reject) => {
    console.log("entro en list 3333")
    connection.query(query, (err, data) => {
      console.log("entro en list 4444")
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function get(table,id) {
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
  console.log("data desde update:",data)
  return new Promise((resolve, reject) => {
    connection.query(`UPDATE ${table} SET ? WHERE id=?`, [data, data.id], (err, result) => {
      if (err){
        return reject(err);
      }else{

        resolve(result);
        
      }
    })
  })
}

async function upsert(table, data) {
  console.log("aqui en upsert la data es: ",data)
  console.log("aqui en upsert la tabla es: ",table)
  let user = await get(table,{id:data.id})

  if (user.length>0 || data.id) {
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
