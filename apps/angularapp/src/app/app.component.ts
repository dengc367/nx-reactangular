import { Component } from '@angular/core';
import '@rectangular/elements';

@Component({
  selector: 'rectangular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularapp';
  counter = 0;
  buy(type: any) {
    this.counter++;
  }
}
