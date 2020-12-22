import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ReproController extends Controller {
  @tracked showButton = true;
  @tracked clickCount = 0;

  @action
  hide() {
    this.showButton = false;
  }

  @action
  myCallback() {
    this.clickCount++;
  }
}
