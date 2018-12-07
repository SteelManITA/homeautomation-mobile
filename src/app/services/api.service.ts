import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

import { Observable, Observer } from 'rxjs/Rx';

import { DataService } from './data.service';
import { RequestWrapperService } from './request-wrapper.service';

import { ENV } from '@env/environment';
import { Constants } from '@app/constants';

export interface ApiResponse
{
  error: boolean;
  status: number;
  message: string;
  results: any;
}

@Injectable()
export class ApiService
{
  protected API_URL: string;
  protected headers: {[key: string]: string} = {};

  constructor(
    protected request: RequestWrapperService,
    protected ADS: DataService,
  ) {
    this.API_URL = ENV.API.URL + ENV.API.VER;
    this.headers['x-app-version'] = Constants.APP_VERSION;
  }

  private handle(method: string, url: string, data?: {[key: string]: any}): Observable<ApiResponse>
  {
    return new Observable((observer: Observer<ApiResponse>) => {
      this.request.send(method, this.API_URL + url, data, this.headers).
        subscribe((response: HttpResponse<ApiResponse>) => {
          observer.next(response.body);
          observer.complete();
        });
    });
  }

  public post(url: string, data?: {[key: string]: any}): Observable<ApiResponse>
  {
    return this.handle('post', url, data);
  }

  public get(url: string, data?: {[key: string]: any}): Observable<ApiResponse>
  {
    return this.handle('get', url, data);
  }

  public delete(url: string, data?: {[key: string]: any}): Observable<ApiResponse>
  {
    return this.handle('delete', url, data);
  }

  public put(url: string, data?: {[key: string]: any}): Observable<ApiResponse>
  {
    return this.handle('put', url, data);
  }
}
