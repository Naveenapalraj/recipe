import RESTAdapter from '@ember-data/adapter/rest';

export default class RecipeAdapter extends RESTAdapter {
  host = "http://localhost:3000";
}
