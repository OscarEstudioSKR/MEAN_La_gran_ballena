const { Router } = require('express');
const router = Router();
const usersController = require('../controllers/usersController');

router.get('/', usersController.api);
router.get('/users/', usersController.getUsers);
router.get('/users/:id', usersController.getUser);
router.delete('/users/:id', usersController.deleteUser);
router.post('/users/', usersController.postUser);
router.put('/users/:id', usersController.putUser);

router.post('/users/validate', usersController.validateUser);

module.exports = router;