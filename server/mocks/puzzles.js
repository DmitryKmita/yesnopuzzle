module.exports = function (app) {
  var express = require('express');
  var puzzlesRouter = express.Router();

  var puzzles = require('../data/puzzles');
  var lastPuzzleId = 5;

  puzzlesRouter.get('/', function (req, res) {
    res.send({
      "puzzles": puzzles
    });
  });

  puzzlesRouter.post('/', function (req, res) {
    var puzzle = req.body.puzzle;

    puzzle.id = ++lastPuzzleId;
    puzzle.createdOn = new Date();
    puzzle.author = 1;

    puzzles.push(puzzle);

    res.send({
      "puzzles": puzzle
    });
  });

  puzzlesRouter.get('/:id', function (req, res) {
    var record = null;

    puzzles.forEach(function (puzzle) {
      if (puzzle.id == req.params.id) {
        record = puzzle;
      }
    });

    if (!record) {
      res.status(404).send();
    } else {
      res.send({
        "puzzles": record
      });
    }
  });

  app.use('/api/puzzles', puzzlesRouter);
};
