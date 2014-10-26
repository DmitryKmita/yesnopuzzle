import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('comment', 'Comment', {
  // Specify the other units that are required for this test.
  needs: ['model:author', 'model:question']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
