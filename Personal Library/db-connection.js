const mongoose = require("mongoose");
let uri = 'mongodb+srv://drifter_kabir:9vnww7NzNudbuUS@cluster0.9r2iq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const db=	mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

	let bookSchema = new mongoose.Schema({
		title: {type: String, required: true},
		comments: [String]
	})

module.exports = db;