import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Serializer | add recipe', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('add-recipe');

    assert.ok(serializer);
  });

  test('it serializes records', function(assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('add-recipe', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
