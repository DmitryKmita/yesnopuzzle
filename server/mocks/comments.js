module.exports = function(app) {
  var express = require('express');
  var commentsRouter = express.Router();

  var comments = require('../data/comments');

  commentsRouter.get('/', function(req, res) {
    if (req.query.question_id) {
      res.send({
        "comments": comments.filter(function (comment) {
          return comment.question === parseInt(req.query.question_id);
        })
      });
    } else {
      res.send({"comments":comments});
    }
  });

  comments.forEach(function(comment) {
    commentsRouter.get('/' + comment.id, function (req, res) {
      res.send({
        "comments": comment
      });
    });
  });

  app.use('/api/comments', commentsRouter);
};
