//importing all neceessary modules
const express = require('express');
const app = express();
const notesRouter = require('./routes/notes');

app.use(express.json()); // its a Middleware to parse JSON request bodies
app.use('/notes', notesRouter);//Use the notesRouter for all /notes routes

const PORT = 5003 // set the port to port no 5003
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
