const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const userBLL = require('../bll/userBLL');

// const user = [{ id: 1, name: "matar", pass: "123" }]

router.post('/', async (req, res) => {
    const users = await userBLL.getUsers()
    const { username1, userpass1 } = req.body
    const userlogin = users.find(user => user.phone == username1 && user.password == userpass1)



    if (userlogin) {

        const key = "qqq"
        const token = await jwt.sign({ id: userlogin._id, name: userlogin.name }, key, { expiresIn: "2h" })
        res.json({ token, userlogin })

    } else {

        res.json("eror")
    }
})

module.exports = router;





