import Controller from '@ember/controller';
import {action} from '@ember/object';

export default class AddRecipeController extends Controller {
  value = {
    category : '1'
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
        name : this.name.toLowerCase(),
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
          this.transitionToRoute('recipes');
      });
    }
  }

}
