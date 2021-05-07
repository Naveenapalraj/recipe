import Model ,{attr, hasMany}from '@ember-data/model';

export default class CategoryModel extends Model {
  @hasMany('recipe') recipe;
  @attr('string') categoryName;
}
