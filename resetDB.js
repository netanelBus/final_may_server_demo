require('dotenv').config();
const mongoose = require('mongoose');
const { connectToMyMongoDB } = require('./db.js');
const Singer = require('./Singer.js');

main();

async function main() {
	try {
		connectToMyMongoDB();
		await initDB();
		await mongoose.disconnect();
	}
	catch (err) {
		console.error(err);
	}
}

async function initDB() {
	await deleteAllSingers();

	await Promise.all([
		insertSinger('nisim', 'cohen', 42),
		insertSinger('shlomo', 'levi', 13),
		insertSinger('david', 'israel', 99),
	]);

	console.log('singers inserted');
}

async function insertSinger(fname, lname, age) {
	const singer = await Singer.create({ fname, lname, age });
	console.log(`singer saved:\n${singer}`);
}

async function deleteAllSingers() {
	await Singer.deleteMany({});
	console.log('deletion complete');
}
