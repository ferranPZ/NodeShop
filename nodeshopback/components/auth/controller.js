const store = require("../admin/store");
const auth = require('../../auth/index');
const config = require("../../config");
const response = require("../../network/response");
const bcrypt = require("bcrypt");
const table = 'admin';

async function compare(password,hash) {
  console.log("password:",password)
  console.log("hash:",hash)
  return new Promise(async (resolve,reject)=>{
    bcrypt.compare(password, hash, function(err, result) {
      if (result) {
        resolve();
      } else {
        reject('Los datos son incorrectos (comparing)');
      }
  
    });

  });
  
}

async function login(req,res) {
    return new Promise(async (resolve, reject) => {
      let user;
      if (!req.body.nombre || !req.body.password) {
        console.error('[messageController] Falta nombre o password');
        reject('Los datos son incorrectos');
      }else{
        const join = {
          admin_auth : "id",
        }
        const query = {
          nombre : req.body.nombre,
          //password : await bcrypt.hash(req.body.password,5)
        }
        try {
          user = await store.query(table,query,join);
        } catch (error) {
          reject(error);
        }

        if (user) {
          try {
            await compare(req.body.password,user.password).then(
              resolve(auth.sign(JSON.stringify(user)))
            )
          } catch (error) {
            console.error(error);
          }
          
        } else {
            //console.log("entro aquiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
           
        }
        //resolve(store.query(table,query,join));
    
      }
      reject('Los datos son incorrectos');
    });
  }


  async function whoami(req,res) {
    return new Promise(async (resolve,reject)=>{
      
      try {
        await auth.check.logged(req)
      } catch (error) {
        reject('No se ha encontrado al usuario')
      }
     
    
      if (req.user) {
        delete req.user.password;
        delete req.user.estado;

        console.log("usuario decodificado :",req.user)
        resolve(req.user)
         
      }else{
        reject('No se ha encontrado al usuario')
  
      }
 

    })
  }


  module.exports = {
    login,
    whoami,
  
  };
  