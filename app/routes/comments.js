import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var question = this.modelFor('question');

    return this.store.find('comment', { question_id: question.get('id') });
  }
});
