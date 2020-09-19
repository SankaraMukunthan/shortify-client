
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Url } from '../models/url';

const BASE_URL = 'http://localhost:5000/api/url/shorten/';
@Injectable()
export class CreateShortUrlService {

  constructor(private httpClient: HttpClient ) { }
  
  createShortUrl(body: Url): Observable<Url>{
    return this.httpClient.post<Url>(BASE_URL, body)
  }

}
