
const express = require('express');
const router = express.Router();
const notesHandler = require('../handlers/notesHandler');

// Defining the  routes and their  handler functions
router.get('/query', notesHandler.queryNotes);  
router.get('/', notesHandler.getAllNotes);
router.get('/:id', notesHandler.getNoteById);
router.post('/', notesHandler.createNote);
router.put('/:id', notesHandler.updateNote);
router.delete('/:id', notesHandler.deleteNote);
router.put('/:id/tags', notesHandler.addTagsToNote);
router.delete('/:id/tags', notesHandler.removeTagsFromNote);

//Export the router for use in the main application that is in index.js
module.exports = router;
