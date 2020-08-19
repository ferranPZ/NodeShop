const store = require('./store');
const config = require('../../config');
const response = require('../../network/response');


// consejo :no es necesario retornar una promesa en todos los metodos, ya que el store ya devuelve una. solo deberia retornar el store, y si falta algun dato, return new reject!

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
    console.log("todo buen ")
    resolve(store.add(nombre,descripcion,unidades,valor,id_categoria,profile_pic))
      
  });


} 

function updateProduct(id_product,nombre,descripcion,unidades,valor,id_categoria,imagen) {
  return new Promise((resolve,reject)=>{
    //comprueba de que se hayan enviado los datos
    if (!id_product || !nombre || !descripcion || !unidades || !valor || !id_categoria) {
      console.error('[messageController] Faltan datos');
      reject('Los datos son incorrectos');
    }

     //si no recibe imagen entonces coloca la por default
     let profile_pic=config.product.default_img;
     if(imagen!==undefined){
       profile_pic=imagen.filename;
     }

    resolve(store.update(id_product,nombre,descripcion,unidades,valor,id_categoria,profile_pic))
  });

}

function deleteProduct(id_product) {
  


  return new Promise((resolve,reject)=>{
    //comprueba de que se hayan enviado los datos
    if (!id_product) {
      console.error('[messageController] Faltan datos');
      reject('Los datos son incorrectos');
    }

    resolve(store.remove(id_product));
  });


}


module.exports = {
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
}