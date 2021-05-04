import EmberRouter from '@ember/routing/router';
import config from 'recipe-server/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('add-recipe');
  this.route('show-recipe',{ path: '/recipe/:id' });
  this.route('recipes');
  this.route('edit-recipe',{ path: '/edit-recipe/:id' });
});
