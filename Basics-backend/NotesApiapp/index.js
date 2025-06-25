const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('Server is up and running on port 3000');
});

//  Create an API to add, update, delete, and retrieve notes.

app.get('/notes', (req, res) => {
    // Retrieve all notes from the database.
    res.send([]);
});


app.post('/notes', (req, res) => {
    // Create a new note in the database.
    res.send(req.body);
});

//  Store notes in a JSON file 

const notes = require('./notes.json');

app.get('/notes/:id', (req, res) => {
    // Retrieve a single note by its ID from the database.
    const note = notes.find(n => n.id === parseInt(req.params.id));
    if (!note) return res.status(404).send('Note not found');
    res.send(note);
});

app.put('/notes/:id', (req, res) => {
    // Update a note in the database by its ID.
    const noteIndex = notes.findIndex(n => n.id === parseInt(req.params.id));
    if (noteIndex === -1) return res.status(404).send('Note not found');
    notes[noteIndex] = {...req.body, id: parseInt(req.params.id)};
    res.send(notes[noteIndex]);
});

// for delet
    app.delete('/notes/:id', (req, res) => {
    // Delete a note from the database by its ID.
    const noteIndex = notes.findIndex(n => n.id === parseInt(req.params.id));
    if (noteIndex === -1) return res.status(404).send('Note not found');
    notes.splice(noteIndex, 1);
    res.send(notes);
});

// Add a new note to the database.  

app.post('/notes', (req, res) => {
    const newNote = {...req.body, id: notes.length + 1};
    notes.push(newNote);
    res.status(201).send(newNote);
});
// to retirve note

app.get('/notes/:id', (req, res) => {
    const note = notes.find(n => n.id === parseInt(req.params.id));
    if (!note) return res.status(404).send('Note not found');
    res.send(note);
});

// to update note

app.put('/notes/:id', (req, res) => {
    const noteIndex = notes.findIndex(n => n.id === parseInt(req.params.id));
    if (noteIndex === -1) return res.status(404).send('Note not found');
    notes[noteIndex] = {...req.body, id: parseInt(req.params.id)};
    res.send(notes[noteIndex]);
});

// to delete note

app.delete('/notes/:id', (req, res) => {
    const noteIndex = notes.findIndex(n => n.id === parseInt(req.params.id));
    if (noteIndex === -1) return res.status(404).send('Note not found');
    notes.splice(noteIndex, 1);
    res.send(notes);
});

//  Store notes in a JSON file

const notes = require('./notes.json');

app.get('/notes/:id', (req, res) => {
    // Retrieve a single note by its ID from the database.
    const note = notes.find(n => n.id === parseInt(req.params.id));
    if (!note) return res.status(404).send('Note not found');
    res.send(note);
});




