import Controller from '@ember/controller';
import {action} from '@ember/object';
export default class EditRecipeController extends Controller {
  value = {
    category : '1'
  };
  @action
  editRecipe(){
    const data = {
      name:this.model.name,
      category :this.value.category,
      duration:this.model.duration,
      ingredients:this.model.ingredients,
      imageUrl:this.model.imageUrl
    }
    fetch('http://localhost:3000/recipes/' + this.model.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(() => {
      this.set('name','');
      this.set('category','Lunch');
      this.set('duration','');
      this.set('ingredients','');
      this.set('imageUrl','');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
}
