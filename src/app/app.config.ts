import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    provideRouter(routes),   
    // provideTransloco({
    //   config: {
    //     defaultLang: 'en',
    //     // Remove this option if your application doesn't support changing language in runtime.
    //     reRenderOnLangChange: true,
    //     prodMode: !isDevMode(),
    //     availableLangs: LANGUAGE_MAP(),
    //   },
    //   loader: TranslocoHttpLoader,
    // }), 
  ],
};
