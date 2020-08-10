//middleware que maneja los errores antes de q los  lanze al frontend
const response = require('./response');

function errors(err,req,res,next) {

    console.error('[error]',err);

    const message = err.message || 'error interno';
    const status = err.statusCode || 500;

    response.error(message, status)
}

module.exports = errors;