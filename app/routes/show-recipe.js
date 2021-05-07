import Route from '@ember/routing/route';
import EmberObject, { computed } from '@ember/object';
export default class ShowRecipeRoute extends Route {
  model(data){
    let recipeData = this.store.peekRecord('recipe', data.id);
    recipeData.rollbackAttributes();
    return recipeData;
  }
  setupController(controller, model) {
    super.setupController(controller, model);
    controller.set('ingredients',model.ingredients);
  }

}
