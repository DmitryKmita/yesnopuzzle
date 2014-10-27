import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.belongsTo('author', { async: true }),
  question: DS.belongsTo('question', { async: true }),
  text: DS.attr('string'),
  answer: DS.attr('string'),
  createdOn: DS.attr('date')
});
