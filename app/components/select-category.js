import Component from '@glimmer/component';
import {action} from '@ember/object';
import { inject as service } from '@ember/service';
export default class SelectCategoryComponent extends Component {
  @service('category') categoryValue;
  @action
  selectedCategory(value){
    this.args.value.category = value.target.value;
    return this.args.value;
  }
}
