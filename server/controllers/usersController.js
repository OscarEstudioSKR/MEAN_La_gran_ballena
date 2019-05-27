const usersController = {};
const usersSchema = require('../models/usersSchema');

usersController.getUsers = async (req, res) => {
    const employees = await usersSchema.find();
    res.json(employees);
};

usersController.getUser = async (req, res) => {
    res.json( await usersSchema.findById(req.params.id) );
};

usersController.postUser = async (req, res) => {
    const employee = await new usersSchema(req.body);
    await employee.save();
    res.json(employee);
};
usersController.putUser = function (){

};
usersController.deleteUser = function (){

};
module.exports = usersController;