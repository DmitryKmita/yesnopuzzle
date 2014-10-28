import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var puzzle = this.modelFor('puzzle');

    return this.store.find('question', { puzzle_id: puzzle.get('id') });
  }
});
