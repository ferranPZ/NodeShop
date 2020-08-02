const api = {
    dbUrl: process.env.DB_URL || 'mongodb://user:user1234@ds255107.mlab.com:55107/telegrom',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/app',
    filesRoute: process.env.FILES_ROUTE || 'files'
};

const mysql = {
    host: process.env.MYSQL_HOST || 'localhost',
    user:process.env.MYSQL_USER || 'admin',
    password:process.env.MYSQL_PASS || '4959853260013',
    database:process.env.MYSQL_DB || 'nstorepl',
}

const product ={
    default_img: process.env.DEFAULT_IMG || 'default',
}
module.exports = {
    api,
    mysql,
    product
};