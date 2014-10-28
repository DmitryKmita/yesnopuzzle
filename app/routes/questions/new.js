import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    submit: function() {
      var me = this, form, puzzle, question, success, failure;

      form = this.controllerFor('questions/new');
      puzzle = this.modelFor('puzzle');

      question = this.store.createRecord('question', {
        puzzle: puzzle,
        text: form.get('question')
      });

      success = function(question) {
        form.send('reset');
        me.transitionTo('question', question.id);
      };

      failure = function() {
        form.set('errorMessage', 'Something bad happened.');
      };

      question.save().then(success).catch(failure);
    }
  }
});
