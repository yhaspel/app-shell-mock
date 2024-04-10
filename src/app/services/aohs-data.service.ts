import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AohsDataService {
  getAohsRouteData() {
    return { staticFilesEndpoint: 'http://localhost:3400' };
  }
}
