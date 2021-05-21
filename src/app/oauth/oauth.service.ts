import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OauthResquest } from './models/oauth.request';
import { OauthResponse } from './models/oauth.response';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OauthService {

  constructor(public httpClient: HttpClient) { }

  oauthToken(request: OauthResquest, url): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods' ,'POST, GET, OPTIONS, PUT, DELETE')
      .set('Access-Control-Allow-Headers' ,'Origin, Content-Type, Accept, Authorization, X-Request-With')
      .set('Content-Type','x-www-form-urlencoded');
    return this.httpClient
            .post<OauthResponse>(url, request,{ headers: headers })
            .pipe(map((res: any) => res as OauthResponse));
  }
}
