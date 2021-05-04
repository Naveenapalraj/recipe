import Route from '@ember/routing/route';

export default class EditRecipeRoute extends Route {
  model(data){
    return this.store.peekRecord('recipe',data.id);
  }
}
