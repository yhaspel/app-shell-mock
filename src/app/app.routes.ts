import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { RemoteMfeService } from './services/remote-mfe.service';

const loadRemoteModuleWrapper = async ({
  appId,
  exposedModule,
}: {
  appId: string;
  exposedModule: string;
}) => {
  const mfeRemoteEntry = (await RemoteMfeService.fetchRemoteMfeMetaData()).find(
    (remoteMfeData) => remoteMfeData.appId === appId
  );
  const remoteEntryUrl = mfeRemoteEntry?.remoteUrl || '';
  return loadRemoteModule({
    type: 'module',
    remoteEntry: remoteEntryUrl,
    exposedModule: exposedModule,
  });
};

export const routes: Routes = [
  {
    path: 'itero-aohs',
    loadComponent: () =>
      loadRemoteModuleWrapper({
        appId: 'itero-aohs',
        exposedModule: './Component',
      }).then((m) => m.AppComponent),
    loadChildren: () =>
      loadRemoteModuleWrapper({
        appId: 'itero-aohs',
        exposedModule: './Routes',
      }).then((m) => m.ITERO_AOHS_ROUTES),
  },
  {
    path: 'test-mife',
    loadComponent: () =>
      loadRemoteModuleWrapper({
        appId: 'test-mife',
        exposedModule: './Component',
      }).then((m) => m.AppComponent),
    loadChildren: () =>
      loadRemoteModuleWrapper({
        appId: 'test-mife',
        exposedModule: './Routes',
      }).then((m) => m.TEST_MIFE_ROUTES),
  },
];
