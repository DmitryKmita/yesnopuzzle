import Ember from 'ember';

export function formatDate(date) {
  return moment(date).startOf('minute').fromNow();
}

export default Ember.Handlebars.makeBoundHelper(formatDate);
