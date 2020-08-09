const store = require("./store");
const config = require("../../config");
const response = require("../../network/response");

function getCategoria(id_categoria) {
  return new Promise(async (resolve, reject) => {
    resolve(store.list(id_categoria));
  });
}

module.exports = {
  getCategoria,
};
