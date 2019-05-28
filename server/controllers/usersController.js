const usersSchema = require('../models/usersSchema');
const bcrypt = require('bcrypt');
const usersController = {};

usersController.api = (req, res) => {
    res.json({
        "Api": "La gran ballena"
    });
}

usersController.getUsers = async (req, res) => {
    const user = await usersSchema.find();
    res.json(user);
};

usersController.getUser = async (req, res) => {
    res.json( await usersSchema.findById(req.params.id) );
};

usersController.postUser = async (req, res) => {
    const newUser = await new usersSchema(req.body);
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(newUser.userPassword, salt);
    newUser.userPassword = passwordHash;
    await newUser.save();
    res.json(newUser);
};


usersController.putUser = async (req, res) => {
    const {id} = req.params;
    const setUser = {
        userName: req.body.userName
    }
    await usersSchema.findByIdAndUpdate(id, {$set: setUser});
    res.json(setUser);
};

usersController.deleteUser = async (req, res) => {
    await usersSchema.findByIdAndDelete(req.params.id);
    res.json({
        "status": "User deleted"
    });
};

module.exports = usersController;