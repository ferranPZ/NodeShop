const store = require('./store');
const response = require('../../network/response');


function getProduct() {
    
    return new Promise(async (resolve, reject) => {
      //  resolve(store.list(id,table));
      resolve(store.list());
    });
}

module.exports = {
    getProduct
}