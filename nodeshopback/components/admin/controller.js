const store = require("./store");
const config = require("../../config");
const response = require("../../network/response");
const table = 'admin';

// function getCategoria(id_categoria) {
//   return new Promise(async (resolve, reject) => {
//     resolve(store.list(id_categoria));
//   });
// }

function upsert(req) {

  return new Promise(async (resolve, reject) => {
     //comprueba de que se hayan enviado los datos
    if (!req.body.email || !req.body.nombre  || !req.body.password) {
      console.error('[messageController] Faltan datos');
      reject('Los datos son incorrectos');
      return false;
    }else{
      let dataAdmin = {
        idadmin	: req.body.id || null,
        email:req.body.email,
        nombre:req.body.nombre,
        descripcion:req.body.descripcion,
        fotoperfil:req.body.file || null,
        estado:"1"
      }
      let aux = "qsechotoyrelocoqweqweweqw";

      

      //consulta por id de admin recien creado y asignarla al admin_auth, asi es

      try {
        let borrar = 0;
        let newAdmin = await store.upsert(table,dataAdmin);
        if(newAdmin.insertId){
          console.log("/////////////////////////////////////////auth//////////////////////////////////////////")
          let dataAuth = {
            admin_idadmin : newAdmin.insertId,//getAdmin id
            password: req.body.password
          }
          console.log(dataAuth);
          resolve (store.upsert(table+"_auth",dataAuth));
        }
      } catch(err) {
        // catches errors both in fetch and response.json
        alert(err);
      }
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
  //getCategoria,
  upsert,
  //remove
};
