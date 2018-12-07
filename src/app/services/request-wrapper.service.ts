import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';
import { Platform } from 'ionic-angular';

import {
  HttpClient,
  HttpResponse,
  HttpParams,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { Utils } from '../utils';

export interface RequestOptions
{
  body?: any;
  headers?: HttpHeaders;
  reportProgress?: boolean;
  params?: HttpParams;
  observe?: 'body'|'response';
  responseType?: 'json';
  withCredentials?: boolean;
}

@Injectable()
export class RequestWrapperService
{
  constructor(
    protected networkService: Network,
    protected platform: Platform,
    protected http: HttpClient,
  ) {
  }

  private buildHeaders(method: string): {[key: string]: string|string[]}
  {
    const contentHeaders:  {[key: string]: string|string[]} = {};
    switch (method) {
      case 'get':
        contentHeaders['Content-Type'] = 'text/plain';
        break;
      default:
        contentHeaders['Content-Type'] = 'application/json';
        break;
    }
    contentHeaders['Accept'] = 'application/json';
    return contentHeaders;
  }

  private methodHasBody(method: string): boolean
  {
    switch (method) {
      case 'post':
      case 'put':
      case 'patch':
        return true;
      default:
        return false;
    }
  }

  private paramsToQueryString(params: {[key: string]: any}): string
  {
    const urlSearchParams: URLSearchParams = new URLSearchParams();
    if (Utils.isTrueObject(params)) {
      Object.keys(params).map(key => {
        urlSearchParams.set(key, params[key]);
      });
    }
    return urlSearchParams.toString();
  }

  public buildResponse(
    message: string,
    status: number,
    url?: string,
    results: {[key: string]: any} = {}
  ): HttpResponse<Object>
  {
    status = Number(status);
    const error: boolean = (status < 200 || status >= 300);
    return new HttpResponse<Object>({
      body: {
        error: error,
        status: status,
        message: message,
        results: results
      },
      status: status,
      url: url
    });
  }

  public send(
    method: string,
    url: string,
    params?: {[key: string]: any},
    headers?: {[key: string]: any}
  ): Observable<HttpResponse<Object>>
  {
    method = method.toLowerCase();
    const httpHeadersArgs: any = this.buildHeaders(method);
    if (Utils.isTrueObject(headers)) {
      Object.keys(headers).
        map(key => {
          httpHeadersArgs[key] = headers[key];
        });
    }

    const options: RequestOptions = {
      observe: 'response',
      headers: new HttpHeaders(httpHeadersArgs)
    };

    if (Utils.isDefined(params)) {
      if (this.methodHasBody(method)) {
        options.body = params;
      } else {
        options.params = new HttpParams({
          fromString: this.paramsToQueryString(params)
        }); // provare a fare new URLSearchParams(params)
      }
    }

    return new Observable((observer: Observer<HttpResponse<Object>>) => {
      if (this.platform.is('mobile') && this.networkService.type === 'none') {
        const response: HttpResponse<Object> = this.buildResponse(
          'No connections are available',
          503,
          url
        );
        observer.next(response);
        observer.complete();
        return;
      }
      this.http.request(method, url, options).
        subscribe(
          (response: HttpResponse<Object>) => {
            observer.next(response);
            observer.complete();
          },
          (responseError: HttpErrorResponse) => {
            const response: HttpResponse<Object> = this.buildResponse(
              responseError.error.message || responseError.message,
              responseError.status,
              url,
              (responseError.error && responseError.error.results) || []
            );
            observer.next(response);
            observer.complete();
          }
        );
    });
  }

  public post(url: string, data?: {[key: string]: any}): Observable<HttpResponse<Object>>
  {
    return this.send('post', url, data);
  }

  public get(url: string, data?: {[key: string]: any}): Observable<HttpResponse<Object>>
  {
    return this.send('get', url, data);
  }

  public delete(url: string, data?: {[key: string]: any}): Observable<HttpResponse<Object>>
  {
    return this.send('delete', url, data);
  }

  public put(url: string, data?: {[key: string]: any}): Observable<HttpResponse<Object>>
  {
    return this.send('put', url, data);
  }
}
