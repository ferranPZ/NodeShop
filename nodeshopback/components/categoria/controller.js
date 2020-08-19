const store = require("./store");
const config = require("../../config");
const response = require("../../network/response");
const table = 'categoria';




function getCategoria(id_categoria) {
  return new Promise(async (resolve, reject) => {
    resolve(store.list(id_categoria));
  });
}

function upsert(req) {
  return new Promise(async (resolve, reject) => {
     //comprueba de que se hayan enviado los datos
    if (!req.body.nombre || !req.body.descripcion) {
      console.error('[messageController] Faltan datos');
      reject('Los datos son incorrectos');
      return false;
    }else{
      let data = {
        idcategoria:req.body.id || null,
        nombre:req.body.nombre,
        descripcion:req.body.descripcion,
        categoria_idcategoria:req.body.categoria_idcategoria || null,
        estado:"1"
      }
      if (req.body.id) {
        
      }
 
      resolve(store.upsert(table,data));
    }

  });
}


function remove(req) {
  return new Promise(async (resolve, reject) => {
    if (!req.query.id) {
      console.error('[messageController] Falta id en query');
      reject('Los datos son incorrectos');
    }else{
      const user = {
        estado : 0,
        idcategoria : req.query.id
      }
      resolve(store.upsert(table,user));
    }
  });
  
}

module.exports = {
  getCategoria,
  upsert,
  remove
};


