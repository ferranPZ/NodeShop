const store = require("../admin/store");
const auth = require('../../auth/index');
const config = require("../../config");
const response = require("../../network/response");
const bcrypt = require("bcrypt");
const table = 'admin';


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

    
            bcrypt.compare(req.body.password,user.password).then((result)=>{
              console.log("pass ingresada:",req.body.password)
              console.log("pass correcta:",user.password)
              if(!result){
                reject('Los datos son incorrectos');
              } else {
                //generar token
                resolve(auth.sign(JSON.stringify(user)));
              }
            })
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
  