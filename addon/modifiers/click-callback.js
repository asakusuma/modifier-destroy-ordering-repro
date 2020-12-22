import Modifier from 'ember-modifier';

export default class ClickCallbackModifier extends Modifier {
  didInstall() {
    this.element.addEventListener(
      'click',
      this.args.named.callback,
      true
    );
  }

  // If you remove cleanup, it "fixes" the issue
  willDestroy() {
    if (this.args.named.callback) {
      this.element.removeEventListener(
        'click',
        this.args.named.callback,
        true
      );
    }
  }
}
