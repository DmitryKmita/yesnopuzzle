import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  name: DS.attr('string'),
  surname: DS.attr('string'),
  puzzles: DS.hasMany('puzzle', { async: true }),
  questions: DS.hasMany('question', { async: true })
});
