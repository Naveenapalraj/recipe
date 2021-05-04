import Route from '@ember/routing/route';
import EmberObject, { computed } from '@ember/object';
export default class ShowRecipeRoute extends Route {
  model(data){
    return this.store.peekRecord('recipe', data.id);
  }
  setupController(controller, model) {
    super.setupController(controller, model);
    controller.set('ingredients',model.ingredients);
  }

}
