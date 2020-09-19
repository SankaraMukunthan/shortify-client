import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Url } from '../models/url';

const BASE_URL = 'http://localhost:5000/api/url'
@Injectable()
export class MyurlsService {

  constructor(private httpClient: HttpClient) {   }

  getUrls() : Observable<Url[]>{
    return this.httpClient.get<Url[]>(BASE_URL);
  };

}
