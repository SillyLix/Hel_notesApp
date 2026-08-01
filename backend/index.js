const express = require('express');
require('dotenv').config();
const Note = require('./models/Note');
const app = express();

const requestLogger = (request, response, next) => {
	console.log('Method:', request.method);
	console.log('Path:  ', request.path);
	console.log('Body:  ', request.body);
	console.log('---');
	next();
};
app.use(express.static('dist'));
app.use(express.json());
app.use(requestLogger);

app.get('/api/notes', (request, response) => {
	Note.find({}).then((notes) => {
		response.json(notes);
	});
});

app.get('/api/notes/:id', (request, response) => {
	Note.findById(request.params.id)
		.then((note) => {
			if (note) {
				response.json(note);
			} else {
				response.status(404).end();
			}
		})
		.catch((error) => {
			console.log(`Error with GET request: ${error.message}`);
			response.status(400).end();
		});
});

app.delete('/api/notes/:id', (request, response) => {
	const id = request.params.id;
	notes = notes.filter((note) => note.id !== id);

	response.status(204).end();
});

app.post('/api/notes', (request, response) => {
	const body = request.body;

	if (!body.content) {
		return response.status(400).json({
			error: 'content missing',
		});
	}

	const note = new Note({
		content: body.content,
		important: body.important || false,
		date: Date.now(),
	});

	console.log(Date.now());

	note.save().then((savedNote) => {
		response.json(savedNote);
	});
});

app.put('/api/notes/:id', (request, response) => {
	const body = request.body;

	if (!body.content) {
		return response.status(400).json({
			error: 'content missing',
		});
	}

	const note = {
		content: body.content,
		important: body.important || false,
		date: Date.now(),
	};

	Note.findByIdAndUpdate(request.params.id, note, {
		new: true,
		runValidators: true,
		context: 'query',
	})
		.then((updatedNote) => {
			if (updatedNote) {
				response.json(updatedNote);
			} else {
				response.status(404).end();
			}
		})
		.catch((error) => {
			console.log(`Error with GET request: ${error.message}`);
			response.status(400).end();
		});
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(`server running on port ${PORT}`);
});
