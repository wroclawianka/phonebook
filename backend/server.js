const express = require('express');

const API_PORT = 3001;
const app = express();

app.listen(API_PORT, () => console.log('Server is up and running on port number ' + API_PORT));
