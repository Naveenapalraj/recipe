import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | show-recipe', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:show-recipe');
    assert.ok(route);
  });
});
