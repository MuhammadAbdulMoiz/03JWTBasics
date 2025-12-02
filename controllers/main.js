const jwt = require('jsonwebtoken')
const { BadRequest } = require('../errors/index')

const login = async (req, res) => {
    const {username, password} = req.body;
    if (!username || !password){
        throw new BadRequest('Please provide User Name and Password');
    }
    const id = new Date().getDate();
    const claims = {
        sub: id, 
        uname: username,
        role: 'user'
    }
    const key = process.env.SECRET;
    const life = process.env.JWT_LIFE
    const options = {
        expiresIn: life,
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