// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
const fs = require("fs");
// NOTE: The application should have a db.json file on the backend that will be used to store and retrieve notes using the fs module.

// Sets up and initializes the Express App server
// =============================================================
var app = express();
// Sets an initial port, use later in listener
var PORT = process.env.PORT || 3000;

// Middleware sets up the Express app to find/use files and handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


// API Routes
// =============================================================

// GET /api/notes
  // Should read the db.json file and return all saved notes as JSON. // Basic route that sends the user first to the AJAX Page

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname,'public/notes.html'));
});

// Displays all notes
app.get('/api/notes', (req, res) => {
  res.sendFile(path.join(__dirname,'db/db.json'));
});

// Displays a single note, or returns false
app.get("/api/notes/:note", function(req, res) {
  var noteSelect = req.params.note;
  console.log(noteSelect);
  res.json(noteSelect)      
});

// POST /api/notes
  // Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. // Create New Notes - takes in JSON input

  app.post("/api/notes", (req, res) => {
    // req.body hosts is equal to the JSON post sent from the user; this works because of our body parsing middleware
    const addedNote = req.body;
    let data = fs.readFileSync('./db/db.json');
    let noteTaker = JSON.parse(data);
    // Push addedNote to array
    noteTaker.push(addedNote);
    // Write new array 
    fs.writeFileSync('./db/db.json',JSON.stringify(noteTaker), (err, data) => {
      if (err) throw err;
      res.json(noteTaker)      
    }); 
    res.sendFile(path.join(__dirname,'public/notes.html'));
});

// DELETE /api/notes
  // DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. 
  // Note: To delete a note, need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.

  app.delete("/api/notes/:id", (req, res) => {
     // DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
     let data = fs.readFileSync('./db/db.json');
     let noteTaker = JSON.parse(data);
     // const notesSaved = noteTaker.filter(note => parseInt(note.id) !== parseInt(req.params.id));
     const notesSaved = noteTaker.find(n => n.id === parseInt(req.params.id));
     // select and delete selected note
     const index = noteTaker.indexOf(notesSaved);
     noteTaker.splice(index);

    fs.writeFile(__dirname + "/db/db.json", JSON.stringify(noteTaker), (err, data) => {
      if (err) throw err;
      //send response back to client
      res.json(noteTaker)    
    }); 
  });


//HTML Routes
// =============================================================

// GET /notes - Should return the notes.html file. 
app.get("/notes", (req, res) => res.sendFile(__dirname + "/public/notes.html"));
// GET * - Should return the index.html file 
app.get("*", (req, res) => res.sendFile(__dirname + "/public/index.html"));

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});