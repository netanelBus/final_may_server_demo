const mongoose = require('mongoose');

const singerSchema = new mongoose.Schema({
	fname: String,
	lname: String,
	age: Number,
});

module.exports = mongoose.model("Singers", singerSchema);
