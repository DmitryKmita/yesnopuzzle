import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  answer: DS.attr('string'),
  author: DS.belongsTo('author'),
  comments: DS.hasMany('comment'),
  createdOn: DS.attr('date')
});
