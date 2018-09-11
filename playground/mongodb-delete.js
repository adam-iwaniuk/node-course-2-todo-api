// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect mongoDB server');
    }
    console.log('Connected to MongoDB server');

    // client.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    // client.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    client.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    });


    client.collection('Users').deleteMany({name: 'Adam'}).then((result) => {
        console.log(result);
    });
    client.collection('Users').deleteOne({_id: new ObjectID("5b97603fca89683a78fcef47")}).then((result) => {
        console.log(result);
    });
    // client.close();
});