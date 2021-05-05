import Controller from '@ember/controller';
import {action} from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { filterBy } from '@ember/object/computed';
export default class IndexController extends Controller {
  @tracked showAllRecipe = true;
  @tracked showFilteredRecipe = false;
  @tracked filteredRecipe;
  @tracked searchValue = '';

  @action
  searchRecipe(){
    let searchBoxValue = this.searchValue.toLowerCase();
    if(searchBoxValue.length >1){
      this.showAllRecipe = false;
      this.showFilteredRecipe = true;
    }
    else{
      this.showAllRecipe = true;
      this.showFilteredRecipe = false;
    }
    this.filteredRecipe = this.store.peekAll('recipe').filter(function(filteredRecipe){
      return filteredRecipe.name.includes(searchBoxValue) || (filteredRecipe.category.includes(searchBoxValue));
    });
  }
}
