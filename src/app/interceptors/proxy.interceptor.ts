import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first, mergeMap } from 'rxjs';
import { ProxyMapService } from '../services/proxy-map.service';

@Injectable()
export class ProxyInterceptor implements HttpInterceptor {
  constructor(private proxyMapService: ProxyMapService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.proxyMapService.fetchProxyMap().pipe(
      first(),
      mergeMap((proxyMap: { [key: string]: string }) => {
        return this.interceptFlow(req, next, proxyMap);
      })
    );
  }

  interceptFlow(
    req: HttpRequest<any>,
    next: HttpHandler,
    proxyMap: { [key: string]: string }
  ): Observable<HttpEvent<any>> {
    let targetUrl = '';
    for (const prefix in proxyMap) {
      if (req.url.startsWith(prefix)) {
        targetUrl = proxyMap[prefix];
        break;
      }
    }

    const reqURL = req.url;
    // If a target URL is found, proxy the request
    if (targetUrl) {
      const proxiedReq = req.clone({
        url: targetUrl + '/' + reqURL,
      });
      return next.handle(proxiedReq);
    }
    // Else, pass through other requests
    return next.handle(req);
  }
}
