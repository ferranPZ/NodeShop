const store = require('./store');
const config = require('../../config');
const response = require('../../network/response');


function getProduct(id_product) {
    return new Promise(async (resolve, reject) => {
      resolve(store.list(id_product));
    });
}

function addProduct(nombre,descripcion,unidades,valor,id_categoria,imagen) {
  return new Promise(async (resolve, reject) => {
    //comprueba de que se hayan enviado los datos
    if (!nombre || !descripcion || !unidades || !valor || !id_categoria) {
        console.error('[messageController] Faltan datos');
        reject('Los datos son incorrectos');
        return false;
    }

    //sanitizar datos!!

    //si no recibe imagen entonces coloca la por default
    let profile_pic=config.product.default_img;
    if(imagen!==undefined){
      profile_pic=imagen.filename;
    }

    resolve(store.add(nombre,descripcion,unidades,valor,id_categoria,profile_pic))
      


  });


} 


module.exports = {
    getProduct,
    addProduct,
}