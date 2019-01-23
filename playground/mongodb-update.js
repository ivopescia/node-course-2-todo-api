//const MongoClient = require('mongodb').MongoClient;
// es6 destructuring
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');

    /*
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5c4851d8163268a88b0f988a')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })
    */

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c484e895e3e3336ccc824eb')
    }, {
        $set: {
            name: 'Ivo'
        },
        $inc: {
            age: +5
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })

    //db.close();
});