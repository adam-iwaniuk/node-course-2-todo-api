// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect mongoDB server');
    }
    console.log('Connected to MongoDB server');

    // client.collection('Todos').find({
    //     _id: new ObjectID('5b9760742e4b703464e11dac')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined,2));
    // }, (err) => {
    //     console.log('Inable to fetch todos', err);
    // });

    // client.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Inable to fetch todos', err);
    // });

    client.collection('Users').find({
        name: 'Adam'
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined,2));
    }, (err) => {
        console.log('Inable to fetch todos', err);
    });

    // client.close();
});