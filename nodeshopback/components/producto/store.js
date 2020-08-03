const mysql = require('mysql');
const config = require('../../config');

const dbconfig = {
    host:config.mysql.host,
    user:config.mysql.user,
    password:config.mysql.password,
    database:config.mysql.database,
}

let connection;

function handleCon() {
    connection = mysql.createConnection(dbconfig)
    connection.connect((error)=>{
        if (error) {
            console.log('[db error]:',error)
            setTimeout(handleCon, 2000);
        } else {
            console.log('Conectado a la BD')
        }
    });
    connection.on('error', error=>{
        console.log('[db error]:',error);
        if (error.code === 'PROTOCOL_CONNECTION_LOST') {
            handleCon();
        }else{
            throw error;
            
        }   
    });

}


handleCon();

function list(id_product) {
    let query;
    if (id_product) {
        query=`SELECT * FROM producto WHERE idProducto=${id_product} AND estado='1'`;
    } else {
        query=`SELECT * FROM producto WHERE estado='1'`;
    }
    console.log("Listando")
    return new Promise((resolve,reject)=>{
        connection.query(query,(err,data)=>{
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

function add(nombre,descripcion,unidades,valor,id_categoria,profile_pic) {
    let query;
    query=`INSERT INTO producto (idProducto, nombre, descripcion, unidades, valor, estado, imagen, categoria_idcategoria) VALUES (NULL, '${nombre}', '${descripcion}', '${unidades}', '${valor}', '1', '${profile_pic}', '${id_categoria}');`

    return new Promise((resolve,reject)=>{
        connection.query(query,(err,data)=>{
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}


function update(id_product,nombre,descripcion,unidades,valor,id_categoria,profile_pic) {
    let query;
    query = `UPDATE producto SET nombre='${nombre}',descripcion='${descripcion}',unidades='${unidades}',valor='${valor}',imagen='${profile_pic}',categoria_idcategoria='${id_categoria}' WHERE idProducto='${id_product}'`

    return new Promise((resolve,reject)=>{
        connection.query(query,(err,data)=>{
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });


}

function remove(id_product) {
    query = `UPDATE producto SET estado=0 WHERE idProducto='${id_product}'`

    return new Promise((resolve,reject)=>{
        connection.query(query,(err,data)=>{
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

module.exports = {
    list,
    add,
    update,
    remove
}