import Component from '@glimmer/component';
import {action} from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { computed, set } from '@ember/object';
import { inject as service } from '@ember/service';
export default class ShowMessageComponent extends Component {
  @tracked recipeId = this.args.data.id;
  @tracked isdeleted = this.args.checkdeleted;
  @service('recipe-application')recipeValue;
  @service router;// @service recipeApplication

  @action
  deleteRecipe(value){
    fetch('http://localhost:3000/recipes/' + this.recipeId, {
      method: 'DELETE',
    })
    .then(res => res.text())
    .then(() =>{
      value.destroyRecord();
      this.transitionTo('show-recipe');
    })
  }
}
