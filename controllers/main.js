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
    const luckyNo = Math.floor(Math.random()*100);
    res.status(200).json({msg:`Hello, ${req.user.uname}`, secret:`Here is your Secret Key ${luckyNo}`});
}

module.exports = {
    login,
    dashboard
}