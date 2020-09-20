const api = {
    dbUrl: process.env.DB_URL || 'mongodb://user:user1234@ds255107.mlab.com:55107/telegrom',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/app',
    filesRoute: process.env.FILES_ROUTE || 'files',
    profpic: process.env.PROFILE_PICS || 'profpic'
};

const mysql = {
    host: process.env.MYSQL_HOST || 'remotemysql.com',
    user:process.env.MYSQL_USER || 'oWJNbsYH6n',
    password:process.env.MYSQL_PASS || 'iFD5UflnKR',
    database:process.env.MYSQL_DB || 'oWJNbsYH6n',
}

const product ={
    default_img: process.env.DEFAULT_IMG || 'default',
}

const jwt ={
    secret: process.env.SECRET || 'secreto',
}


module.exports = {
    api,
    mysql,
    product,
    jwt
};