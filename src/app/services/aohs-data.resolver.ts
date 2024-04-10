// import { Observable, of } from "rxjs";

import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { AohsDataService } from './aohs-data.service';

export const aohsDataResolver: ResolveFn<{ staticFilesEndpoint: string }> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(AohsDataService).getAohsRouteData();
};
