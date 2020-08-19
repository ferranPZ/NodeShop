const auth = require('../../auth/index');

function checkAuth(action) {
    function middleware(req,res,next) {
        switch (action) {
            case 'create':
                const owner = req.body.id;
                auth.check.own(req, owner);
                next()
                break;
            case 'upsert':
                auth.check.logged(req);
                next()
                break;
    
            default:
                next();
                break;
        }
    }
    return middleware
}



module.exports = checkAuth;