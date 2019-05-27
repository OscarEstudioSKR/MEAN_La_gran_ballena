const usersController = {};

usersController.getUsers = (req, res) => {
    res.send('Hello world 2');
};

module.exports = usersController;