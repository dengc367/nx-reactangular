import 'zone.js';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ElementsModule } from '@rectangular/elements';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const mount = () => {
  platformBrowserDynamic()
    .bootstrapModule(ElementsModule)
    .catch((err) => console.error(err));
};

export { mount };
