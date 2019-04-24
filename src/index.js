const PORT = '3000';
const express = require('express');
const productRoute = require('./route/product');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());


// middelware request
app.use('/', productRoute);


// Handeler for 404
app.use((req, res, next) => {
    res.status(404).send('page not found');
})
// Handler for 505
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.send('505 server');
})

app.listen(PORT);