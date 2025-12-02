const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors/custom-error')

const authenticate = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer')){
        throw new CustomAPIError('No Token Present', 401);
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
        throw new CustomAPIError('Not authorized to access this route', 401);
    }
}

module.exports = authenticate