const store = require("./store");
const config = require("../../config");
const response = require("../../network/response");
const table = 'categoria';

// function getCategoria(id_categoria) {
//   return new Promise(async (resolve, reject) => {
//     resolve(store.list(id_categoria));
//   });
// }

function upsert(req) {
  return new Promise(async (resolve, reject) => {
     //comprueba de que se hayan enviado los datos
    if (!req.body.email || !req.body.nombre || !req.body.nombre || !req.body.password) {
      console.error('[messageController] Faltan datos');
      reject('Los datos son incorrectos');
      return false;
    }else{
      let data = {
        email:req.body.nombre,
        nombre:req.body.descripcion,
        descripcion:req.body.categoria_idcategoria || null,
        fotoperfil:req.body.file || null,
        estado:"1"
      }

      //continuar aqui, consultar por id de admin recien creado y asignarla al admin_auth

      if (req.body.id) {
        
      }
      resolve(store.upsert(table,data));
    }

  });
}


// function remove(req) {
//   return new Promise(async (resolve, reject) => {
//     if (!req.query.id) {
//       console.error('[messageController] Falta id en query');
//       reject('Los datos son incorrectos');
//     }else{
//       const user = {
//         estado : 0,
//         idcategoria : req.query.id
//       }
//       resolve(store.upsert(table,user));
//     }
//   });
  
// }

module.exports = {
  getCategoria,
  upsert,
  remove
};
