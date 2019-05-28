import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersModel } from '../models/UsersModel';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  readonly URI_API = "http://localhost:3001/api/users";
  selectedUser: UsersModel;
  usersList: UsersModel[];

  constructor( private http: HttpClient) {
    this.selectedUser = new UsersModel();
   }

  getUsers(){
    return this.http.get( this.URI_API );
  };
  getUser( _id:string ){
    return this.http.get( this.URI_API + `/${_id}`);
  };
  postUser( user:UsersModel ){
    return this.http.post( this.URI_API, user);
  };
  putUser( user:UsersModel ){
    return this.http.put( this.URI_API + `/${user._id}`, user);
  };
  deletetUser( _id:string ){
    return this.http.delete( this.URI_API + `/${_id}`);
  };
}
