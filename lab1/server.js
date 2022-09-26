//server.js

//load express as dependency
const express = require('express');

//define app express
const app = express();

//define server ip and host port
const HOST = '127.0.0.1';

//if port defined in env, use, if not then use 3000
const PORT = process.env.PORT || 3000;

//server static assets from public folder
app.use(express.static('./public'));

//start server and listen for requests
app.listen(PORT, HOST, () => {
    console.log(`Server connected at http://${HOST}:${PORT}`)
})