import Controller from '@ember/controller';
import {action} from '@ember/object';
import { computed, set } from '@ember/object';
import { inject as service } from '@ember/service';
export default class ShowRecipeController extends Controller {
  @service router;
  @computed('ingredients')
  get ingredientValues(){
    return this.ingredients.split(',');
  }

  @action
  deleteRecipe(){
    if(confirm('Are you sure, Do you want to delete ?')){
      var self = this;
      fetch('http://localhost:3000/recipes/' + this.model.id, {
          method: 'DELETE',
      })
      .then(res => res.text())
      .then(() => {
        self.model.unloadRecord();
        self.router.transitionTo('index');
      })
    }
  }

}

