const express = require('express');
const message = require('../components/producto/network');


const routes = function (server) {
    server.use('/producto', message);

}

module.exports = routes;