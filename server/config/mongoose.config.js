const mongoose = require('mongoose'); // import mongoose
//TODO:create a mongoose.config.js file and setup your mongoose.connect function
mongoose.connect("mongodb://localhost/jokes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
	.catch (
        err => console.log('Error connecting to MongoDB', err)
    );