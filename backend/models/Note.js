// mongo database
const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
	content: {
		type: String,
		minLength: 5,
		required: true,
	},
	important: Boolean,
	date: Date,
})

noteSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject.__v
		delete returnedObject._id
	},
})

module.exports = mongoose.model('Note', noteSchema)
