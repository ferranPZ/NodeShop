const express = require('express');
const message = require('../components/producto/network');
const message2 = require('../components/categoria/network');


const routes = function (server) {
    server.use('/producto', message);
    server.use('/categoria', message2);
}

module.exports = routes;