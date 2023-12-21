const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try{
        const token = req.header("Authorization");
        if(!token)
            return res.status(400).json({ msg: "Need valid Access token"});
        

            jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
                if(err)
                    return res.status(400).json({ msg: "Invalid Authorization"});
                
                    req.user = user;
                    next();
                })
    } catch (err) {
        return res.status(400).json({ msg: err.message});
    }
}

module.exports = auth 