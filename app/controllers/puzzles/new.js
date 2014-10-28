import Ember from 'ember';

export default Ember.Controller.extend({
  title: null,
  description: null,
  answer: null,

  errorMessage: null,

  actions: {
    reset: function() {
      this.set('title', null);
      this.set('description', null);
      this.set('answer', null);
      this.set('errorMessage', null);
    }
  }
});
