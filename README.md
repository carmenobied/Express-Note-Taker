# Express-Note-Taker
![Project license badge](https://img.shields.io/badge/license-MIT-brightgreen)

The goal was to create an application that can be used to write, save, and delete notes. This app uses an express backend and saves and retrieves note data from a JSON file. The process involved building the application backend and connecting it with the frontend. For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.

## User Story
```
AS A user, I want to be able to write and save notes
I WANT to be able to delete notes I've written before
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

# Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [License](#License)
  * [Questions](#Questions)

## Installation
```
i. Fork the Github repository.
ii. Clone the forked repo into your local machine using gitbash/terminal to pull the project and data.
iii. Run the ommand-lines below to run the app functionality. You can also access the files and assets via Visual Studio to view the code. 
iv. Run the app command-lines.
v. Deploy app on Heroku.
```

## Process
The following HTML routes should be created:
* GET /notes - Should return the notes.html file.
* GET * - Should return the index.html file

NOTE: The application should have a db.json file on the backend that will be used to store and retrieve notes using the fs module.

The following API routes should be created:
* GET /api/notes - Should read the db.json file and return all saved notes as JSON.
* POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
* DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. 

Note: To delete a note, need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.

Ensure the following app functionality: 
* Application should allow users to create and save notes.
* Application should allow users to view previously saved notes.
* Application should allow users to delete previously saved notes.

## Usage
```
Key Components Used:
Express - Heroku - JavaScript - db.json - fs module - HTML Routes - API Routes - GET/POST requests - listener
```

* Below is screenshot of the application:

![Express Note Taker Screenshot: HTML](./Assets/expressNoteTaker_html_screenshot.png)

![Express Note Taker Screenshot: NOTES](./Assets/expressNoteTaker_notes_screenshot.png)

## Contributing
Pull requests are welcome. Please use the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md) and for major changes, please open an issue beforehand to discuss the changes.

## License 
[MIT](https://choosealicense.com/licenses/mit/)

## Questions  
Have questions? Contact me at:
##### Email: carmen.obied@gmail.com
##### Github:  **carmenobied** [carmenobied](https://github.com/carmenobied)