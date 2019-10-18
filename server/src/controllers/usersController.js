const usersController = {};

const UserModel = require('../models/User');

//Devuelve un json con los usuarios
usersController.getUsers = async (req, res) => {
    const users = await UserModel.find();
    res.json(users);
};

//Toma un req.body y crea un nuevo usuario
usersController.createUser = async (req, res) => {
    const { username } = req.body;
    const newUser = new UserModel({
        username
    });
    await newUser.save();
    res.json({message: "User Created"}); 
};

usersController.getUser = (req, res) => res.json({name: "admin"});
usersController.updateUser = (req, res) => res.json({message: "User updated"});

//Toma un id y elimina un usuario
usersController.deleteUser = async (req, res) => {
    await UserModel.findOneAndDelete({_id: req.params.id});
    res.json({message: "User Deleted"});
};

module.exports = usersController;