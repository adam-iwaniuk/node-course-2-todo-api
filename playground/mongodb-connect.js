// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect mongoDB server');
    }
    console.log('Connected to MongoDB server');
    // var db = client.collection('Todos');
    //
    // db.insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err){
    //         return console.log('Unable to insert todo', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });


    // var dbUsers = client.collection('Users');
    //
    // dbUsers.insertOne({
    //     name: 'Adam',
    //     age: 34,
    //     location: 'Gdańsk'
    // }, (err, result) => {
    //     if (err){
    //         return console.log('Unable to insert user', err);
    //     }
    //
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    client.close();
});