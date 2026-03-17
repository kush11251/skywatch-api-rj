const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/skywatch-api', { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;