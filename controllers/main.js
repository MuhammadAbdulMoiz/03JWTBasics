
const login = async (req, res) => {
    const {username, password} = req.body;
    console.log(username, password)
    res.send('Fake login/register');
}

const dashboard = async (req, res) => {
    const luckyNo = Math.floor(Math.random()*100);
    res.status(200).json({msg:`Hello, oni`, secret:`Here is your Secret Key ${luckyNo}`});
}

module.exports = {
    login,
    dashboard
}