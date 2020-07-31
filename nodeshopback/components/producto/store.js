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
    console.log("primero")
}


handleCon();

function list(id,table) {
    console.log("segundo")
    return new Promise((resolve,reject)=>{
        connection.query('SELECT * FROM producto',(err,data)=>{
            if (err) {
                console.log("mal");

                reject(err);
            } else {
                console.log("bien");
                resolve(data);
            }
        });
    });
}
module.exports = {
    list,
}