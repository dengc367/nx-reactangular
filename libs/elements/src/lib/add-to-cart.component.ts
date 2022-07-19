import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  template: ` <button (click)="add()">Add to Cart</button> `,
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'add-to-cart-button',
})
export class AddToCartComponent {
  @Input() type = '';
  @Output() addToCart = new EventEmitter<string>();

  add() {
    this.addToCart.emit(this.type);
  }
}
