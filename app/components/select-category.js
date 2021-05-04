import Component from '@glimmer/component';
import {action} from '@ember/object';

export default class SelectCategoryComponent extends Component {
  @action
  selectedCategory(value){
    this.args.value.category = value.target.value;
    return this.args.value;
  }
}
