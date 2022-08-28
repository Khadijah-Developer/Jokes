//TODO:create a jokes.routes.js in the applicable folders
//TODO:in the jokes.routes file: import * from your controller file and add an express route for every route listed in the wireframe
const JokeController = require('../controllers/jokes.controller'); //TODO: import controllers

module.exports = app => {
    app.get("/api/jokes", JokeController.findAllJokes);
    app.get("/api/jokes/random", JokeController.findRandom);
    app.get("/api/jokes/:id", JokeController.findOneSingleJoke);
    app.post("/api/jokes/new", JokeController.createNewJoke);
    app.put("/api/jokes/update/:id", JokeController.updateExistingJoke);
    app.delete("/api/jokes/delete/:id", JokeController.deleteAnExistingJoke);
};
