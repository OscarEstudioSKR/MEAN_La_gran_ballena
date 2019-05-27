const { Router } = require('express');
const router = Router();
const usersController = require('../controllers/usersController');

router.get('/', usersController.getUsers);

module.exports = router;