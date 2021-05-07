import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
export default class CategoryService extends Service {
  @tracked categoryValue = [{
    id:'1',
    categoryName :'breakfast'
  },
  {
    id:'2',
    categoryName :'lunch'
  },
  {
    id:'3',
    categoryName :'dinner'
  },
  {
    id:'4',
    categoryName :'beverage'
  },
  {
    id:'5',
    categoryName :'soup'
  },
  {
    id:'6',
    categoryName :'salad'
  },
  {
    id:'7',
    categoryName :'snacks'
  }
]
}
