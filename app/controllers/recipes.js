import Controller from '@ember/controller';
import {action} from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { filterBy } from '@ember/object/computed';
export default class IndexController extends Controller {
  @tracked filteredRecipe;
  queryParams = ['searchValue'];
  @tracked searchValue = null;
  @tracked model;
  @tracked categoryVal;
  get filterRecipe() {
    let searchValue = this.searchValue;
    let modelValue = this.model;
    if (searchValue) {
      this.filteredRecipe =  modelValue.filter(function(getRecipe){
        return getRecipe.name.includes(searchValue.toLowerCase()) || (getRecipe.category.get('categoryName').includes(searchValue.toLowerCase()));
      });
    }else {
      this.filteredRecipe =  modelValue;
      return this.filteredRecipe;
    }
  }

}
