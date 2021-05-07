import Route from '@ember/routing/route';
export default class ApplicationRoute extends Route {
  beforeModel(){
    this.transitionTo('recipes');
    fetch(`http://localhost:3000/recipes`)
      .then(res => res.json())
      .then(recipe => {
        this.store.pushPayload({
          "recipes":recipe
        })
      })
      fetch(`http://localhost:3000/categoryValue`)
      .then(res => res.json())
      .then(category => {
        this.store.pushPayload({
          "category":category
        })
      })
  }

}
