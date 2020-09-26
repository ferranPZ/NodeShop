const jwt = require("jsonwebtoken");
const config = require('../config');
const error = require('../utils/error');

const secret = config.jwt.secret;


function sign(data) {
    //console.log('data de sign : ',data)
    //console.log("dos")
    //console.log(data[0])
    return jwt.sign({
        data: data
    }, secret, { expiresIn: "90d" });
}

const check = {
    own: function (req, owner) {
        const decoded = decodeHeader(req);
        console.log(decoded);
        if (decoded.id !== owner) {
            throw error('No puedes hacer esto', 401);
        }
    },
    logged: function (req) {
        const decoded = decodeHeader(req);
    }

}

function verify(token) {
    const decoded = jwt.verify(token, secret)
    return decoded;
}

function getToken(auth) {

    if (!auth) {
        throw error('No viene token', 401);
    }

    if (auth.indexOf('Bearer ') === -1) {
        throw error('No viene token', 401);
    }

    let token = auth.replace("Bearer ", "");
    return token;
}

function decodeHeader(req) {
    const authorization = req.headers.authorization || '';
    const token = getToken(authorization);
    const decoded = verify(token);

    req.user = decoded;
    console.log("usuario decoded", req.user)
    return decoded;
}


module.exports = {
    sign,
    check,
};