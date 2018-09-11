// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect mongoDB server');
    }
    console.log('Connected to MongoDB server');

    // client.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5b97717ea212eb8bd64ff7e4")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });
    client.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5b96666cd469791ee8195a48")
    }, {
        $set: {
            name: "Adam"
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    // client.close();
});