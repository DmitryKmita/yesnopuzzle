module.exports = function (app) {
  var express = require('express');
  var puzzlesRouter = express.Router();

  var puzzles = require('../data/puzzles');

  puzzlesRouter.get('/', function (req, res) {
    res.send({
      "puzzles": puzzles
    });
  });

  puzzles.forEach(function (puzzle) {
    puzzlesRouter.get('/' + puzzle.id, function (req, res) {
      res.send({
        "puzzles": puzzle
      });
    });
  });

  app.use('/api/puzzles', puzzlesRouter);
};
