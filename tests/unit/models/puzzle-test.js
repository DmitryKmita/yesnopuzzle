import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('puzzle', 'Puzzle', {
  // Specify the other units that are required for this test.
  needs: ['model:author', 'model:question']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
