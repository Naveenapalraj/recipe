import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
export default class ApplicationRoute extends Route {
  @service('category') categoryValue;
  beforeModel(){
    this.transitionTo('recipes');
    fetch(`http://localhost:3000/recipes`)
      .then(res => res.json())
      .then(recipe => {
        this.store.pushPayload({
          "recipes":recipe
        })
      })
      .then(() =>{
        this.store.pushPayload({
          "category":this.categoryValue.categoryValue
        })
      })
  }

}
