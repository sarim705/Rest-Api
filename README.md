RESTful API for Notes

This is a RESTful API for managing notes. It allows us to create, read, update, delete, and query notes with various tags.

Setup Instructions

Prerequisites
Node.js (v12 or higher)
npm (v6 or higher)

Installation
 1.Clone the repository:git clone https://github.com/sarim705/restful-api.git
  cd restful-api
 2.Install the dependencies:
 npm install
 
Running the Server
To start the server, run:
node index.js
The server will start on port 5000. You should see a message like:
Server is running on port 5003


API Endpoints
Get All Notes
URL: /notes 
Method: GET

Description: Retrieve all notes.

Response:
[
    {"id":1,"title":"Hello ","content":"I done it! successfully implemented REST Api.","tags":["personal"]},
    {"id":2,"title":"Testing Post method","content":"wow ! its work . thanks to Postman","tags":["Testing","work"]},
    {"id":3,"title":"Everything is MohMaya","content":"Be careful! Always","tags":["Thoughts","self"]},
    {"id":4,"title":"AI is future","content":"AI is future as its advancing day by day","tags":["Thoughts","self"]}
]

Get Note by ID
URL: /notes/:id

Method: GET
Description: Retrieve a note by its ID.

Example:curl -X GET http://localhost:5003/notes/1
Response:

{"id":1,"title":"Hello ","content":"I done it! successfully implemented REST Api.","tags":["personal"]}

URL: /notes
Method: POST
Description: Create a new note.

Example:curl -X POST http://localhost:5000/notes -H "Content-Type: application/json" -d '{"title":"New Note","content":"This is a new note.","tags":["new","note"]}'

Update a Note

URL: /notes/:id
Method: PUT
Description: Update an existing note.

Example: curl -X PUT http://localhost:5000/notes/1 -H "Content-Type: application/json" -d '{"title":"Updated Title"}'
Response

{"id":1,"title":"Updated Title","content":"I done it! successfully implemented REST Api.","tags":["personal"]}



