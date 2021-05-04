import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {

  beforeModel(){
    fetch(`http://localhost:3000/recipes`)
      .then(res => res.json())
      .then(recipe => {
        this.store.pushPayload({
          "recipes":recipe
        })
    })
  }

}
