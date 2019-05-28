import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UsersModel } from '../models/UsersModel';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  selectedUser = UsersModel;
  usersList: UsersModel[];
  readonly URL_API = 'http://localhost:3001/api';

  constructor(private http: HttpClient) { }

  //Metodos
  getUser(){
    return this.http.get( this.URL_API );
  }

  postUser( user: UsersModel ){
    return this.http.post( this.URL_API, user );
  }

  putUser( user: UsersModel ){
    return this.http.put( this.URL_API + `/ ${ user._id }`, user);
  }

  deleteUser( _id: string ){
    return this.http.delete( this.URL_API + `/ ${ _id }` );
  }

}
