const store = require("./store");
const config = require("../../config");
const response = require("../../network/response");
const bcrypt = require("bcrypt");
const table = 'admin';

function list(req,res) {

  return new Promise(async (resolve, reject) => {
    resolve(store.list(table));
  });
}



function get(req,res) {
  const data = {
    id:req.query.id
  }
  return new Promise(async (resolve, reject) => {
    resolve(store.get(table,data));
  });
}

async function hash(password) {
  return new Promise((resolve, reject) => {
      bcrypt.hash(password, 10, function(err, hash) {
      if (err) {
        console.log("no se creo el hash");
        reject (err)
      } else {
        console.log("se creo el hash",hash);
        resolve (hash)
      }
    });
  });
}


function upsert(req,res) {

  return new Promise(async (resolve, reject) => {
    console.log(req.body)
     //comprueba de que se hayan enviado los datos
    if (!req.body.email || !req.body.nombre  || !req.body.password) {
      console.error('[messageController] Faltan datos');
      reject('Los datos son incorrectos');
      return false;
    }else{
      let dataAdmin = {
        id	: req.body.id || null,
        email:req.body.email,
        nombre:req.body.nombre,
        descripcion:req.body.descripcion,
        fotoperfil:req.file.filename || null,
        estado:"1"
      }

      

      //consulta por id de admin recien creado y asignarla al admin_auth, asi es

      try {
        let newAdmin = await store.upsert(table,dataAdmin);
        console.log(newAdmin)
        //si fue insertado o actualizado, upsert auth
        if(newAdmin.insertId || req.body.id){

       

          let dataAuth = {
            id : newAdmin.insertId || req.body.id,//getAdmin id
            password: await hash(req.body.password),
            estado:"1"
          }

          


          console.log("contrasena a guardar : ",dataAuth.password)
          //console.log(dataAuth);
          resolve(store.upsert(table+"_auth",dataAuth));
        }else{
          reject('no se logró crear una autenticación para este usuario');
        }

      } catch(err) {
        // catches errors both in fetch and response.json
        console.error(err);
      }
    }

  });
}


async function remove(req) {
  return new Promise(async (resolve, reject) => {
    if (!req.query.id) {
      console.error('[messageController] Falta id en query');
      reject('Los datos son incorrectos');
    }else{
      const user = {
        estado : 0,
        id : req.query.id
      }
      let removed = await store.upsert(table,user)
      if (removed.afectedrow!=0) {
        resolve(store.upsert(table+"_auth",user))
      } 
      //resolve(store.upsert(table,user));
    }
  });
  
}


module.exports = {
  get,
  list,
  upsert,
  remove,

};
