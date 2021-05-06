import Model,{attr, belongsTo } from '@ember-data/model';

export default class RecipeModel extends Model {
  @belongsTo('category') category;
  @attr('string') name;
  @attr('string') category;
  @attr('string') duration;
  @attr('string') ingredients;
  @attr('string') imageUrl;
}
