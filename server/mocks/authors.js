module.exports = function (app) {
  var express = require('express');
  var authorsRouter = express.Router();

  var authors = require('../data/authors');

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
