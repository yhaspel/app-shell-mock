import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

export interface RemoteAppMetadata {
  appId: string;
  remoteUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class RemoteMfeService {

  private static mfeMetaData: RemoteAppMetadata[];

  static get remoteMfeMetaData(): RemoteAppMetadata[] {
    return RemoteMfeService.mfeMetaData || [];
  }

  static fetchRemoteMfeMetaData(): Promise<RemoteAppMetadata[]> {
    if (!!RemoteMfeService.mfeMetaData) {
      return Promise.resolve(RemoteMfeService.mfeMetaData);
    }
    return fetch('assets/mocks/mock-remote-mfe-data.json').then(remoteMfeData => {
      RemoteMfeService.mfeMetaData = remoteMfeData.json() as unknown as RemoteAppMetadata[];
      return RemoteMfeService.mfeMetaData;
    })
  }
}
