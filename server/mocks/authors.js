module.exports = function (app) {
  var express = require('express');
  var authorsRouter = express.Router();

  var authors = [];

  authors.push({
    "id": 1,
    "email": "ruslan.zavacky@gmail.com",
    "name": "Ruslan",
    "surname": "Zavacky",
    "questions": [1, 2],
    "comments": []
  });

  authors.push({
    "id": 2,
    "email": "vasily.pupkin@yesnopuzzle.com",
    "name": "Vasily",
    "surname": "Pupkin",
    "questions": [3, 4, 5],
    "comments": [1, 2, 3]
  });

  authorsRouter.get('/', function (req, res) {
    res.send({"authors": []});
  });

  authors.forEach(function (author) {
    authorsRouter.get('/' + author.id, function (req, res) {
      res.send({
        "authors": author
      });
    });
  });

  app.use('/api/authors', authorsRouter);
};
