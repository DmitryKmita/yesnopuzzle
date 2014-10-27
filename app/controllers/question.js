import Ember from 'ember';

export default Ember.ObjectController.extend({
  hasComments: function() {
    return this.get('commentsCount');
  }.property('commentsCount')
});
