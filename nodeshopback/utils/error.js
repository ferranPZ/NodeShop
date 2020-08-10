//utiliades que pueden ser usadas por cualquier componente

function error(message,code) {
    let e = new Error(message);
    if (code) {
        e.statusCode = code;
    }
    return e;
}


module.exports = error;