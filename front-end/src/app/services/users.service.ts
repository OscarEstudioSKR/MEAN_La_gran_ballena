import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersModel } from '../models/UsersModel';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  prueba: string = "SKR!!!";
  readonly URI_API = "http://localhost:3001/api/";
  selectedUser: UsersModel;
  constructor( private http: HttpClient) { }
  getUser(){
    return this.http.get( this.URI_API );
  }
}
