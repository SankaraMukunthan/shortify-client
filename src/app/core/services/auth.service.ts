import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { LoginResponse, User } from './user';

@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(body: User): Observable<LoginResponse>{
    return this.httpClient.post<LoginResponse>(`${environment.api_url}/user/login`,body);
  }

  signup(body: User): Observable<User>{
    return this.httpClient.post<User>(`${environment.api_url}/user/signup`,body);
  }


}
