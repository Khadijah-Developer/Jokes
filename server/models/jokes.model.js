const mongoose = require('mongoose'); // import mongoose

// TODO: create a jokes.model.js file
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String, // TODO: validate type to ensure being string 
        minlength: [10, "setup must be at least 10 characters"] // TODO: validate string lengths 10 
    },
    punchline: {
        type: String, // TODO: validate type to ensure being string 
        minlength: [3, "punchline must be at least 10 characters"] // TODO: validate string lengths 10 
    }
});

// TODO: Joke is constructor function 
//TODO: in the jokes.model file create a JokeSchema and export the mongoose.model("joke", JokeSchema)
const Joke = mongoose.model('Joke', JokeSchema);
// TODO:exports constructor function
module.exports = Joke;