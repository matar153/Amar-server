const userModel = require('../model/userModel');


//get all users

const getUsers = async ()=>{
    const users = await userModel.find({});
    return users;
}


//get user by id
const getUserById = async (id)=>{
    const user = await userModel.findById(id);
    return user;
}

//add user
const addUser = async (user)=>{
    const newUser = new userModel(user);
    await newUser.save();
    return newUser;
}

//update user
const updateUser =async(id, user)=>{
    const updateUser = await userModel.findByIdAndUpdate(id, user);
    return "updated"
}

//delete user
const deleteUser = async (id)=>{
    const deleteUser = await userModel.findByIdAndDelete(id);
    return deleteUser;
}




module.exports = {
    getUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
    
}