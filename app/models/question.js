import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  answer: DS.attr('string'),
  author: DS.belongsTo('author', { async: true }),
  comments: DS.hasMany('comment', { async: true }),
  commentsCount: DS.attr('number'),
  createdOn: DS.attr('date')
});
