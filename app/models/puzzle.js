import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  answer: DS.attr('string'),
  author: DS.belongsTo('author', { async: true }),
  questions: DS.hasMany('question', { async: true }),
  questionsCount: DS.attr('number'),
  createdOn: DS.attr('date')
});
