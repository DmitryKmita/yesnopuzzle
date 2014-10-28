import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    submit: function() {
      var me = this, form, puzzle, success, failure;

      form = this.controllerFor('puzzles/new');

      puzzle = this.store.createRecord('puzzle', {
        title: form.get('title'),
        description: form.get('description'),
        answer: form.get('answer')
      });

      success = function(post) {
        form.send('reset');
        me.transitionTo('puzzle', post.id);
      };

      failure = function() {
        form.set('errorMessage', 'Something bad happened.');
      };

      puzzle.save().then(success).catch(failure);
    }
  }
});
