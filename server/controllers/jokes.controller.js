//TODO:create a  jokes.controller.js in the applicable folders
//TODO:in the jokes.controller import your model from the models file
const Joke = require('../models/jokes.model'); // Joke is a constructor where import model

//TODO: Returns a list of all jokes
//TODO:Export a function to get all jokes
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allDaJokes => res.json({ jokes: allDaJokes }))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
};

//TODO:Returns the joke with matching " id"
//TODO:Export a function to get a single joke
module.exports.findOneSingleJoke = (req, res) => { 
    Joke.findOne({ _id: req.params.id })
        .then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
}

//TODO:Creates a new joke
//TODO:Export a function to create a joke
module.exports.createNewJoke = (req, res) => {
  Joke.create(req.body)
    .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
//TODO:Updates the joke with matching "_id"
//TODO: Export a function to update a joke
module.exports.updateExistingJoke = (req, res) => {
Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedJoke => res.json({ joke: updatedJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

//TODO:Removes the joke with matching " id"
//TODO:Export a function to delete a joke
module.exports.deleteAnExistingJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

//TODO:Returns a random joke
module.exports.findRandom = (req, res) => { 
    Joke.countDocuments()
        .then(count => {
            var random = Math.floor(Math.random() * count);
            //to skips docs equal to random number use skip() function
            //if random = 1, skip will skip first document and find one will return second document
            Joke.findOne().skip(random)
                .then(randomJoke => res.json({ result: randomJoke }))
                .catch(err => res.json({ message: "Something went wrong", error: err }))
                }).catch(err => res.json({ message: "Something went wrong", error: err }));
}