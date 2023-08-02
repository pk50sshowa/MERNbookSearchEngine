const mongoose = require('mongoose');

// Basic connection template to connect to the Mongoose database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mernbooksearchengine', {
    usenewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
});

module.exports = mongoose.connection;
