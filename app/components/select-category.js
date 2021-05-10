import Component from '@glimmer/component';
import {action} from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
export default class SelectCategoryComponent extends Component {
  @tracked categoryValue;
  @service store;
  @action
  selectedCategory(value){
    this.args.value.category = value.target.value;
    return this.args.value;
  }
  get getCategoryValue(){
    console.log(this.store);
    return this.store.peekAll('category')._objects;
  }

}
