import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//Third Party Imports
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { TataSky } from '../model/TataSky';

@Injectable()
export class ConfigService {
  constructor(private _http: HttpClient) { }

 /**
   * get data searched by user
   * @param query
   */
   getSearchedData(query:string): Observable<any> {
    return this._http.get<any>('https://help-search-api-prod.herokuapp.com/search?query='+query).pipe(
      map(res => {
        return res.results;
      }));
  }
}