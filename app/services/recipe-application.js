import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
// import Store from '@ember-data/store';

export default class RecipeApplicationService extends Service {
  @tracked getrecipe = true;
  
  getRecipe(){
    console.log(this.getrecipe);
  }

}
