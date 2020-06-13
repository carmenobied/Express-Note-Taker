// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
const fs = require("fs");
// NOTE: The application should have a db.json file on the backend that will be used to store and retrieve notes using the fs module.

// Sets up the Express App
// =============================================================
var app = express();
// Sets an initial port. Will use this later in listener
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
// =============================================================

// GET /api/notes
  // Should read the db.json file and return all saved notes as JSON. // Basic route that sends the user first to the AJAX Page

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "notes.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "notes.html"));
  return res.json(note);
});

// Displays all notes
app.get("/api/notes", (req, res) => {
  // fs file to read note file 
  fs.readFile(__dirname + "/db/db.json", "notes.html") 
});

// Displays a single note, or returns false
app.get("/api/notes/:note", function(req, res) {
  var chosenNote = req.params.note;
  console.log(chosenNote);
  res.json(chosenNote)      
});

// POST /api/notes
  // Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. // Create New Notes - takes in JSON input

app.post("/api/notes", (req, res) => {
 // req.body hosts is equal to the JSON post sent from the user; this works because of our body parsing middleware
  var newNotes = req.body;

  fs.readFile(__dirname + "/db/db.json", "utf8", (err, data) => { 
    if (err) throw err;
    var addNotes = JSON.parse(data);
    // Push newNotes to array
    addNotes.push(newNotes);
    // Write new array 
    fs.writeFile(__dirname + "/db/db.json", JSON.stringify(addNotes), (err, data) => {
      if (err) throw err;
      res.json(addNotes)      
    }); 
  });
});

// DELETE /api/notes
  // DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. 
  // Note: To delete a note, need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.

// app.delete("/api/notes/:id", (req, res) => {
//   fs.readFile(__dirname + "/db/db.json", "utf8", (err, data) => { 
//   }); 
// });

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