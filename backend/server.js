const mongoose = require('mongoose');
const express = require('express');

const API_PORT = 3001;
const app = express();
const dbRoute = 'mongodb+srv://admin:Or7XXfw3WCRbi1HF@phonebook-q7m81.mongodb.net/test?retryWrites=true&w=majority';

// connect to db
mongoose.connect(dbRoute, {useNewUrlParser: true});

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// check if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// launch server into a port
app.listen(API_PORT, () => console.log('Server is up and running on port number ' + API_PORT));
