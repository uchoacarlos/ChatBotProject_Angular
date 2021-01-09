import { Injectable, EventEmitter } from '@angular/core';
import { User } from './login/user';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  url: any ='http://52.91.139.190/fsapi/users';
  currentUser = {};
  response: any;

  public userAuthenticated: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private http: HttpClient, 
    
    ) { }

     // -- Sign-in - Faz login  do usuario -- //

  login(user: User) {
    return this.http.post<User>(`${this.url}/login`, user, httpOptions);
  }
      // Pega o nome do usuario
  getUser() {
    this.response = localStorage.getItem('access_token');
    return JSON.parse(this.response).user.name;
  }

  getToken() {
    return localStorage.getItem('user');
  }


  isLoggedIn(): boolean {
   let authToken = localStorage.getItem('access_token');
   return authToken ? true : false;
 }

 

}
