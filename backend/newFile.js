const mongoose = require('mongoose')
const config = require('./utils/config')
const logger = require('./utils/logger')

mongoose
	.connect(config.MONGODB_URL, { family: 4 })
	.then(() => {
		logger.info('connected to MongoDB')
	})
	.catch((error) => {
		logger.error('error connection to MongoDB:', error.message)
	})
