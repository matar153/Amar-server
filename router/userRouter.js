const express = require('express');
const router = express.Router();
const userBLL = require('../bll/userBLL');
const verifyToken = require('../middleware/jwt')


//get all users
router.get('/', verifyToken, async (req, res) => {
    const users = await userBLL.getUsers();
    res.send(users);
})

//get user by id
router.get('/:id', verifyToken, async (req, res) => {
    const user = await userBLL.getUserById(req.params.id);
    res.send(user);
})

//add user
router.post('/', verifyToken, async (req, res) => {
    const user = await userBLL.addUser(req.body);
    res.send(user);
})

//update user
router.put('/:id', verifyToken, async (req, res) => {
    const user = await userBLL.updateUser(req.params.id, req.body);
    res.send(user);
})

//delete user
router.delete('/:id', verifyToken, async (req, res) => {
    const user = await userBLL.deleteUser(req.params.id);
    res.send(user);
})







module.exports = router;