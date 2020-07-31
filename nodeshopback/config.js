const api = {
    dbUrl: process.env.DB_URL || 'mongodb://user:user1234@ds255107.mlab.com:55107/telegrom',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/app',
    filesRoute: process.env.FILES_ROUTE || 'files'
};

const mysql = {
    host: process.env.MYSQL_HOST || 'localhost',
    user:process.env.MYSQL_USER || 'root',
    password:process.env.MYSQL_PASS || '',
    database:process.env.MYSQL_DB || 'nstorepl',
}

module.exports = {
    api,
    mysql
};