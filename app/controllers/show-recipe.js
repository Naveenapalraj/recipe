import Controller from '@ember/controller';
import {action} from '@ember/object';
import { computed, set } from '@ember/object';
import { inject as service } from '@ember/service';
export default class ShowRecipeController extends Controller {
  @service router;
  @computed('ingedients')
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
        // self.model.deleteRecord();
        // self.model.isDeleted;
        // self.model.save();
        self.model.unloadRecord();
        self.router.transitionTo('index');
        // window.location.href = 'http://localhost:4200/recipes';
      })
    }
  }

}

// isdeleted = false;
  // @computed('isdeleted')
  // get checkIsDeleted(){
  //   console.log('hello');
  //   this.isdeleted = true;
  //   // return this.set('isdeleted',false);
  // }
  // @action
  // deletemsg(){
  //   return this.set('isdeleted',true);
  // }

  // self.router.transitionTo('index');
        // window.location.reload();
        // self.router.currentRoute.parent.refresh();
