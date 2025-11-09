// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('test');

// Create a new document in the collection.
db.getCollection('contacts').insertOne({
    name: '김민수',
    email: 'kimminsu@gmail.com',
    phone: '010-3434-2345'
});
