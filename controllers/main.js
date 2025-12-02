const CustomAPIError = require('../errors/custom-error');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const {username, password} = req.body;
    if (!username || !password){
        throw new CustomAPIError('Please provide User Name and Password',400);
    }
    const id = new Date().getDate();
    const claims = {
        sub: id, 
        uname: username,
        role: 'user'
    }
    const key = process.env.secret;
    const options = {
        expiresIn: '15m',
        issuer: 'api-v1'
    }
    const token = jwt.sign(claims, key, options);
    res.status(200).json({msg:'user created', token});
}

const dashboard = async (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer')){
        throw new CustomAPIError('No Token Present', 401);
    }
    const tkn = authHeader.split(' ')[1]
    const key = process.env.secret;
    try{
        const decode = jwt.verify(tkn, key)
        console.log(decode)
        const luckyNo = Math.floor(Math.random()*100);
        res.status(200).json({msg:`Hello, ${decode.uname}`, secret:`Here is your Secret Key ${luckyNo}`});
    }
    catch{
        throw new CustomAPIError('No authorized to access this route', 401);
    }
    
}

module.exports = {
    login,
    dashboard
}