require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const { connectToMyMongoDB } = require('./db.js');


connectToMyMongoDB();

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/users', require('./routes/usersRoute.js'))
app.use('/products', require('./routes/productsRoute.js'))
app.use('/orders', require('./routes/ordersRoute.js'))

app.get('/test', (req, res) => {
    res.json(process.env.NISIM)
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});
