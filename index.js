require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 6000;
const mongoose = require('mongoose');
const { connectToMyMongoDB } = require('./db.js');
const Singer = require('./Singer.js');

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.get('/singers', async (req, res) => { 
    const singers = await Singer.find({});
    res.json(singers);
 });

app.get('/test', (req, res) => {
    res.json(process.env.NISIM)
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});
