const express = require('express');
const message = require('../components/producto/network');
const message2 = require('../components/categoria/network');
const admin = require('../components/admin/network');
const auth = require('../components/auth/network');




const routes = function (server) {
    server.use('/producto', message);
    server.use('/categoria', message2);
    server.use('/admin', admin);
    server.use('/login', auth);
}

module.exports = routes;