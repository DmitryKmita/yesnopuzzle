import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('question', params.question_id);
  },

  actions: {
    answer: function(value) {
      var puzzle, question;

      puzzle = this.modelFor('puzzle');
      question = this.modelFor('question');

      this.store.find('question', question.get('id')).then(function(question) {
        question.set('answer', value);
        question.save();
      });
    }
  }
});
