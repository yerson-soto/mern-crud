const { Router } = require('express');
const router = Router();

//detructuring a los metodos del controlador
const { getUsers, createUser, getUser, updateUser, deleteUser } = require('../controllers/usersController');

router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;