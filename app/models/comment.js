import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.belongsTo('author'),
  question: DS.belongsTo('question'),
  text: DS.attr('string'),
  answer: DS.attr('string'),
  createdOn: DS.attr('date')
});
