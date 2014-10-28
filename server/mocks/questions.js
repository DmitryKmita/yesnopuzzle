module.exports = function(app) {
  var express = require('express');
  var questionsRouter = express.Router();

  var questions = require('../data/questions');
  var lastQuestionId = 3;

  questionsRouter.get('/', function(req, res) {
    if (req.query.puzzle_id) {
      res.send({
        "questions": questions.filter(function (question) {
          return question.puzzle === parseInt(req.query.puzzle_id);
        })
      });
    } else {
      res.send({"questions":questions});
    }
  });

  questionsRouter.post('/', function (req, res) {
    var question = req.body.question;

    question.id = ++lastQuestionId;
    question.createdOn = new Date();
    question.author = 2;

    questions.push(question);

    res.send({
      "questions": question
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
