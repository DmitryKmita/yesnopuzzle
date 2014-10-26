import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('author', 'Author', {
  // Specify the other units that are required for this test.
  needs: ['model:question', 'model:comment']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
