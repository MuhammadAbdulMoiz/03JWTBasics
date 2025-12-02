const jwt = require('jsonwebtoken')
const { unauthorized } = require('../errors/index')

const authenticate = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer')){
        throw new unauthorized('No Token Present');
    }
    const tkn = authHeader.split(' ')[1]
    const key = process.env.secret;
    try{
        const decode = jwt.verify(tkn, key);
        const {id, uname, role} = decode;
        req.user = {id, uname, role};
        next();
    }
    catch{
        throw new unauthorized('Not authorized to access this route');
    }
}

module.exports = authenticate