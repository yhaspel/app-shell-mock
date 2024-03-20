import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ProxyInterceptor } from './interceptors/proxy.interceptor';
import { provideAuthAngularInterceptor, provideAuthAngularServices } from '@itero/auth-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    provideAuthAngularServices,
		provideAuthAngularInterceptor,
    // { provide: HTTP_INTERCEPTORS, useClass: ProxyInterceptor, multi: true }, // using proxy.conf.json instead. see angular.json for usage
    provideRouter(routes),
  ],
};
