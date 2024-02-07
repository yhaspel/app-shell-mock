import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({ providedIn: 'root' }) // Provide in root for standalone component
export class ProxyMapService {
  fetchProxyMap(): Observable<{[key:string]: string}> {
    const promise = new Promise(async (resolve) => {
        const proxyMap = await fetch('assets/mocks/mock-proxy-map.json').then(res => res.json());
        resolve(proxyMap);
    })
    return from(promise) as Observable<{[key:string]: string}>;
  }
}
