const PORT = '3000';
const express = require('express');
const productRoute = require('./route/product');
const app = express();

app.use('/product', productRoute);
app.get('/', (req, res) => {
    res.send(`Hello!!!`);
})

app.listen(PORT);