// mongo database
const mongoose = require('mongoose');

const mongoURL = process.env.MONGODB_URI;
mongoose.set('strictQuery', false);
mongoose
	.connect(mongoURL, { family: 4 })
	.then((result) => console.log('connected to MongoDB'))
	.catch((error) =>
		console.log(`error connecting to MongoDB: ${error.message}`),
	);

const noteSchema = new mongoose.Schema({
	content: String,
	important: Boolean,
	date: Date,
});

noteSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject.__v;
		delete returnedObject._id;
	},
});

const Note = mongoose.model('Note', noteSchema);

module.exports = mongoose.model('Note', noteSchema);
