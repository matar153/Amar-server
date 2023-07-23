const jwt = require('jsonwebtoken')


function verifyToken(req, res, next) {

    const key = "qqq"
    const token = req.headers["token"]

    if (!token) {
        res.json("no token")
        return
    }

    jwt.verify(token, key, (err, decodedToken) => {
        if (err) {
            res.json("err")
            return
        }
        req.headers["token1"] = decodedToken
        next()
    })



}

module.exports = verifyToken ;