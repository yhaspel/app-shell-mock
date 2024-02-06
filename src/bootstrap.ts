import { bootstrapApplication, createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { bootstrap } from '@angular-architects/module-federation-tools';
import { NgZone, isDevMode } from '@angular/core';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


// (async () => {
//   const app = await createApplication(appConfig);
//   app.injector.get(NgZone).run(() => {
//     app.bootstrap(AppComponent, 'app-root');
//   })
// })();
// bootstrap(AppComponent, {production: !isDevMode(), appType: 'shell'})