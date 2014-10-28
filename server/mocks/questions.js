module.exports = function(app) {
  var express = require('express');
  var questionsRouter = express.Router();

  var questions = require('../data/questions');

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

  questions.forEach(function(question) {
    questionsRouter.get('/' + question.id, function (req, res) {
      res.send({
        "questions": question
      });
    });
  });

  app.use('/api/questions', questionsRouter);
};
