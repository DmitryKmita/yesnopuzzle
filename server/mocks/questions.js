module.exports = function(app) {
  var express = require('express');
  var questionsRouter = express.Router();

  var questions = require('../data/questions');
  var authors = require('../data/authors');
  var puzzles = require('../data/puzzles');
  var lastQuestionId = 3;

  questionsRouter.get('/', function(req, res) {
    if (req.query.puzzle_id) {
      res.send({
        "questions": questions.filter(function (question) {
          return question.puzzle === parseInt(req.query.puzzle_id);
        }),
        "authors": authors
      });
    } else {
      res.send({
        "questions":questions,
        "authors": authors
      });
    }
  });

  questionsRouter.post('/', function (req, res) {
    var question = req.body.question, currentPuzzle;

    question.id = ++lastQuestionId;
    question.createdOn = new Date();
    question.author = 2;

    questions.push(question);

    puzzles.forEach(function(puzzle) {
      if (puzzle.id == question.puzzle) {
        currentPuzzle = puzzle;
      }
    });

    if (currentPuzzle) {
      currentPuzzle.questionsCount++;
    }

    res.send({
      "questions": question,
      "puzzles": currentPuzzle
    });
  });

  questionsRouter.put('/:id', function (req, res) {
    var newQuestion, record, currentPuzzle;

    newQuestion = req.body.question;

    questions.forEach(function(question) {
      if (question.id == req.params.id) {
        record = question;
      }
    });

    record.answer = newQuestion.answer;

    puzzles.forEach(function(puzzle) {
      if (puzzle.id == record.puzzle) {
        currentPuzzle = puzzle;
      }
    });

    if (currentPuzzle) {
      currentPuzzle.questionsCount++;
    }

    res.send({
      "questions": record,
      "puzzles": currentPuzzle
    });
  });

  questionsRouter.get('/:id', function (req, res) {
    var record = null;

    questions.forEach(function(question) {
      if (question.id == req.params.id) {
        record = question;
      }
    });

    if (!record) {
      res.status(404).send();
    } else {
      res.send({
        "questions": record
      });
    }
  });

  app.use('/api/questions', questionsRouter);
};
