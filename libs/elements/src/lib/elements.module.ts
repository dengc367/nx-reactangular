import {
  NgModule,
  Injector,
  DoBootstrap,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AddToCartComponent } from './add-to-cart.component';
import { CartComponent } from './cart.component';

@NgModule({
  imports: [BrowserModule, CommonModule],
  declarations: [AddToCartComponent, CartComponent],
  entryComponents: [AddToCartComponent, CartComponent],
  exports: [AddToCartComponent, CartComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
// export class ElementsModule {}
export class ElementsModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    if (!customElements.get('add-to-cart-button')) {
      const el = createCustomElement(AddToCartComponent, {
        injector: this.injector,
      });
      customElements.define(`add-to-cart-button`, el);
    }
    if (!customElements.get('shopping-cart')) {
      const el2 = createCustomElement(CartComponent, {
        injector: this.injector,
      });
      customElements.define(`shopping-cart`, el2);
    }
  }
}
