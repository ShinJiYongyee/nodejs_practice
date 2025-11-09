// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('test');

// Create a new document in the collection.
db.getCollection('contacts').insertMany([
    {name: '김철수', email: 'kimcheolsu@gmail.com', phone: '010-5678-3223'},
    {name: '이영희', email: 'leeyeonghee@gmail.com', phone: '010-1237-3273'},
]);
