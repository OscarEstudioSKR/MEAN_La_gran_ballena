import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service'
import { NgForm } from '@angular/forms';
import { UsersModel } from 'src/app/models/UsersModel';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['../../../scss/components/main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  menuLogin: boolean = true;
  
  constructor( private usersService: UsersService ) { }

  ngOnInit() {
    this.getUsers();
  }

  saveUserForm( form: NgForm ){
    this.usersService.selectedUser = form.value as UsersModel;
    this.usersService.postUser( form.value )
      .subscribe( res => {
        console.log( res );
      });
      this.cleanForm();
  }

  loginUserForm( form: NgForm ){

    this.usersService.validateUser( form.value as UsersModel )
      .subscribe( res => {
        if(res){
          console.log("User loged", res);
        } else{
          console.log("Fallo", res);
        }
      });


  }

  getUsers(){
    this.usersService.getUsers()
      .subscribe( res => {
        this.usersService.usersList = res as UsersModel[];
      })
  }

  cleanForm(){
    this.usersService.selectedUser = new UsersModel();
  }

}
