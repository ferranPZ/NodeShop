const api = {
    dbUrl: process.env.DB_URL || 'mongodb://user:user1234@ds255107.mlab.com:55107/telegrom',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/app',
    filesRoute: process.env.FILES_ROUTE || 'files'
};

const ui = {
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
}


module.exports = {
    api,
    ui
};