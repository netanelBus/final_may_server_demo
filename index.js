const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 5000;

// const singers = [
// 	{ fname: 'elvis', lname: 'presly', age: 666 },
// 	{ fname: 'michael', lname: 'jackson', age: 2 },
// 	{ fname: 'avi', lname: 'biter', age: 42 }
// ];

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.get('/test', (req, res) => res.json('may final demo'));

// app.post('/singers/new/form', express.urlencoded({ extended: true }), (req, res) => {
// 	const { fname, lname, age } = req.body;
// 	singers.push({ fname, lname, age });
// 	res.status(201).send(`${fname} ${lname} was added`);
// });

// app.post('/singers/new/json', express.json(), (req, res) => {
// 	const { fname, lname, age } = req.body;
// 	singers.push({ fname, lname, age });
// 	res.status(201).send(`${fname} ${lname} was added`);
// });

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});
