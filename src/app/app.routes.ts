import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'itero-aohs',
    loadComponent: () => loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:3400/remoteEntry.js',
        exposedModule: './Component'
    }).then((m) => m.AppComponent),
    loadChildren: () => loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:3400/remoteEntry.js',
        exposedModule: './Routes'
    }).then((m) => m.ITERO_AOHS_ROUTES),
    providers: []
  },
  {
    path: 'test-mife',
    loadComponent: () => loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:5200/remoteEntry.js',
        exposedModule: './Component'
    }).then((m) => m.AppComponent),
    loadChildren: () => loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:5200/remoteEntry.js',
        exposedModule: './Routes'
    }).then((m) => m.TEST_MIFE_ROUTES)
  },
];
