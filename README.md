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

Delete a Note

URL: /notes/:id
Method: DELETE
Description: Delete a note by its ID

Example 

curl -X DELETE http://localhost:5000/notes/1

Response

204 No Content

Add Tags to Note
URL: /notes/:id/tags
Method: PUT
Description: Add tags to an existing note.

Example:
curl -X PUT http://localhost:5000/notes/1/tags -H "Content-Type: application/json" -d '{"tags":["important"]}'

Response

{"id":1,"title":"Hello ","content":"I done it! successfully implemented REST Api.","tags":["personal","important"]}

Remove Tags from Note
URL: /notes/:id/tags
Method: DELETE
Description: Remove tags from an existing note.

Example
curl -X DELETE http://localhost:5000/notes/1/tags -H "Content-Type: application/json" -d '{"tags":["personal"]}'

Response
{"id":1,"title":"Hello ","content":"I done it! successfully implemented REST Api.","tags":["important"]}

Query Notes
URL: /notes/query?tags={tags}
Method: GET
Description: Query notes based on tags with AND, OR, and NOT conditions.

Example
curl -X GET "http://localhost:5000/notes/query?tags=Thoughts AND self"

Response
[
    {"id":3,"title":"Everything is MohMaya","content":"Be careful! Always","tags":["Thoughts","self"]},
    {"id":4,"title":"AI is future","content":"AI is future as its advancing day by day","tags":["Thoughts","self"]}
]


Conclusion

This RESTful API allows you to manage notes with various functionalities, including querying based on complex tag conditions. Feel free to explore and extend the API as needed. Contributions are welcome!

For any issues or suggestions, please open an issue on GitHub.




