const mongoose = require('mongoose');

if (process.argv.length < 3) {
	console.log('give password as argument');
	process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://lix_fullstack:${password}@cluster0.9c1hnit.mongodb.net/noteApp?appName=Cluster0`;

mongoose.set('strictQuery', false);
mongoose.connect(url, { family: 4 });

const noteSchema = new mongoose.Schema({
	content: String,
	important: Boolean,
	date: Date,
});

const Note = mongoose.model('Note', noteSchema);

// const note = new Note({
// 	content: 'mongoose makes things easy',
// 	important: true,
// });

// note.save().then((result) => {
// 	console.log('note saved!');
// 	console.log(result);

// 	mongoose.connection.close();
// });

Note.find({}).then((result) => {
	result.forEach((note) => {
		console.log(note);
	});
	mongoose.connection.close();
});
