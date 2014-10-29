import Ember from 'ember';

export default Ember.ObjectController.extend({
  hasQuestions: function() {
    return this.get('questionsCount');
  }.property('questionsCount'),

  missingQuestions: function() {
    return !this.get('questionsCount');
  }.property('questionsCount')
});
