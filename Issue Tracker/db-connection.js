const mongoose = require("mongoose");
let uri = '';//Use your own
const db = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = db;
