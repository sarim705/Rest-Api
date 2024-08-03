const notesData = require('../data/notesData'); //Importing  notes data from the data module

const getAllNotes = (req, res) => { //it is a Handler to get all notes
    res.json(notesData.notes);
};

const getNoteById = (req, res) => {  // Handler to get a note by its ID
    const note = notesData.notes.find(n => n.id === parseInt(req.params.id));
    if (!note) return res.status(404).send('Note not found');
    res.json(note);
};

const createNote = (req, res) => {  // Handler  for creating new notes
    const newNote = {
        id: notesData.currentId++,
        title: req.body.title,
        content: req.body.content,
        tags: req.body.tags || []
    };
    notesData.notes.push(newNote);
    res.status(201).json(newNote);
};

const updateNote = (req, res) => { //Handler to update an existing note
    const note = notesData.notes.find(n => n.id === parseInt(req.params.id));
    if (!note) return res.status(404).send('Note not found');

    note.title = req.body.title || note.title;
    note.content = req.body.content || note.content;
    note.tags = req.body.tags || note.tags;
    res.json(note);
};

const deleteNote = (req, res) => {  //// Handler to delete a note by its ID
    const noteIndex = notesData.notes.findIndex(n => n.id === parseInt(req.params.id));
    if (noteIndex === -1) return res.status(404).send('Note not found');

    notesData.notes.splice(noteIndex, 1);
    res.status(204).send();
};

const addTagsToNote = (req, res) => { //Handler to add tags to a note
    const note = notesData.notes.find(n => n.id === parseInt(req.params.id));
    if (!note) return res.status(404).send('Note not found');

    note.tags = [...new Set([...note.tags, ...req.body.tags])];
    res.json(note);
};

const removeTagsFromNote = (req, res) => { //Handler to remove tags from a note
    const note = notesData.notes.find(n => n.id === parseInt(req.params.id));
    if (!note) return res.status(404).send('Note not found');

    note.tags = note.tags.filter(tag => !req.body.tags.includes(tag));
    res.json(note);
};

// Its a Function to parse the query string for advanced filtering
const parseQuery = (query) => {
    const andConditions = query.split(' AND ');
    return andConditions.map(condition => {
        const orConditions = condition.split(' OR ');
        return orConditions.map(orCondition => {
            const notConditions = orCondition.split(' NOT ');
            return {
                include: notConditions[0].trim(),
                exclude: notConditions.slice(1).map(tag => tag.trim())
            };
        });
    });
};

const queryNotes = (req, res) => { //Handler to query notes based on tags with AND, OR, NOT conditions
    if (!req.query.tags) {
        return res.status(400).send('Tags query parameter is required');
    }

    const parsedQuery = parseQuery(req.query.tags);
    console.log('Parsed Query:', parsedQuery); 

    const notes = notesData.notes.filter(note => {
        return parsedQuery.every(andCondition => {
            return andCondition.some(orCondition => {
                const includes = orCondition.include ? note.tags.includes(orCondition.include) : true;
                const excludes = orCondition.exclude.every(tag => !note.tags.includes(tag));
                return includes && excludes;
            });
        });
    });

    if (notes.length === 0) {
        return res.status(404).send('Note not found');
    }

    res.json(notes);
};

module.exports = {getAllNotes,getNoteById,createNote,updateNote,deleteNote,addTagsToNote,removeTagsFromNote,queryNotes

};
// Export all handler functions for use in routes