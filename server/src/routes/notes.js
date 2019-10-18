const { Router } = require('express');
const router = Router();

//hacer destructuring a los metodos del controlador
const { getNotes, createNote, getNote, updateNote, deleteNote } = require('../controllers/notesController');

router.route('/')
    .get(getNotes)
    .post(createNote);
    

router.route('/:id')
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote);

module.exports = router;