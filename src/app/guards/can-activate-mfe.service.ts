import { Injectable } from '@angular/core';
import { RemoteMfeService } from '../services/remote-mfe.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanActivateMfeService implements CanActivate {
  constructor() {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    
    return RemoteMfeService.fetchRemoteMfeMetaData().then(res => !!res);
  }
}
