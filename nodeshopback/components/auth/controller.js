const store = require("../admin/store");
const auth = require('../../auth/index');
const config = require("../../config");
const response = require("../../network/response");
const bcrypt = require("bcrypt");
const table = 'admin';


async function login(req,res) {
    return new Promise(async (resolve, reject) => {
      if (!req.body.nombre || !req.body.password) {
        console.error('[messageController] Falta nombre o password');
        reject('Los datos son incorrectos');
      }else{
        const join = {
          admin_auth : "id",
        }
  
        const query = {
          nombre : req.body.nombre,
          password : req.body.password,
        }
        let user = await store.query(table,query,join);
        if (user) {
            //generar token
            resolve(auth.sign(JSON.stringify(user)));

            // console.log("generar token : ",user)
            // resolve("TOKEN")
        } else {
            //console.log("entro aquiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
            reject('Los datos son incorrectos');
        }
        //resolve(store.query(table,query,join));
    
      }
    });
  }


  module.exports = {
    login
  
  };
  