import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', { path: '/' });

  this.resource('questions', function() {
    this.route('new');

    this.resource('question', { path: "/:question_id" }, function() {
      this.route('edit');
      this.route('delete');

      this.resource('comments', function() {
        this.route('new');

        this.resource('comment', { path: "/:comment_id" }, function() {
          this.route('answer');
        });
      });
    });
  });
});

export default Router;
