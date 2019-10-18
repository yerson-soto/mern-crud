const notasController = {};

const NoteModel = require('../models/Note');

//Devuelve un json con todas las notas de la bd
notasController.getNotes = async (req, res) => {
    const notes = await NoteModel.find();
    res.json(notes)
};

//Toma el req.body enviado por post y lo guarda en la base de datos
notasController.createNote = async (req, res) => {
    const { title, content, author, date } = req.body;
    const newNote = new NoteModel({
        title,
        content,
        author,
        date
    });
    await newNote.save();
    res.json({message: "Note Created"});
};

//Toma un id y devuelve un json con la nota que coincide
notasController.getNote = async (req, res) => {
    const note = await NoteModel.findById(req.params.id);
    res.json(note)
};

//Toma un id y el req.body para actualizar la nota que coincida
notasController.updateNote = async (req, res) => {
    const { title, content, author, date } = req.body;
    await NoteModel.findOneAndUpdate({_id: req.params.id}, {
        title, 
        content,
        author,
        date
    });
    res.json({message: "Note Updated"});
};

//Toma un id y elimina la nota que coincide
notasController.deleteNote = async (req, res) => {
    await NoteModel.findOneAndDelete({_id: req.params.id});
    res.json({message: "Note Deleted"});
};


module.exports = notasController;