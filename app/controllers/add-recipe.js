import Controller from '@ember/controller';
import {action} from '@ember/object';
import EmberObject, { computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class AddRecipeController extends Controller {
  value = {
    category : 'lunch'
  };
  @action
  addRecipe(){
    if(this.name != undefined && this.name !='' && this.duration != undefined && this.duration != '' && this.ingredients != undefined && this.ingredients != '' && this.imageUrl!= undefined && this.imageUrl!= ''){
      async function postData(url = '', recipedata = {}) {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(recipedata)
        });
        return response.json();
      }

      postData('http://localhost:3000/recipes', {
        name : this.name,
        category :this.value.category,
        duration:this.duration,
        ingredients:this.ingredients,
        imageUrl:this.imageUrl
      })
      .then(data => {
          this.store.pushPayload({
            "recipes":data
          });
          this.set('name','');
          this.set('category','Lunch');
          this.set('duration','');
          this.set('ingredients','');
          this.set('imageUrl','');
          this.transitionToRoute('index');
      });
    }
  }

}


// @action
// addRecipe(){
//   let recipeId = this.store.peekAll('recipe');
//   if(this.name != undefined && this.duration != undefined && this.ingredients != undefined && this.imageUrl!= undefined ){
//     let addrecipe = this.store.createRecord('recipe',{id:recipeId.length+1});
//         addrecipe.name = this.name;
//         addrecipe.category = this.value.category;
//         addrecipe.duration = this.duration;
//         addrecipe.ingredients = this.ingredients;
//     addrecipe.imageUrl = this.imageUrl;
//     addrecipe.save();
//     this.recipeId++;
//   }
// }
