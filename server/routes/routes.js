const { Router } = require('express');
const router = Router();
const usersController = require('../controllers/usersController');

router.get('/', usersController.getUsers);
router.get('/:id', usersController.getUser);
router.delete('/:id', usersController.deleteUser);
router.post('/', usersController.postUser);
router.put('/:id', usersController.putUser);

module.exports = router;