const express = require('express');
//middleware para errores
const errors = require('./network/errors');
//documentacion de api
const swaggerUi = require('swagger-ui-express')
const swagerDoc = require('./swagger.json');

const app = express();
const server = require('http').Server(app);
const config = require('./config').api;

const cors = require('cors');
const bodyParser = require('body-parser');
//const db = require('./db');
const router = require('./network/routes');

//db(config.dbUrl);

app.use(config.publicRoute, express.static('public'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swagerDoc))
app.use(errors);

router(app);



server.listen(config.port, function () {
    console.log('La aplicación está escuchando en '+ config.host +':' + config.port);
});