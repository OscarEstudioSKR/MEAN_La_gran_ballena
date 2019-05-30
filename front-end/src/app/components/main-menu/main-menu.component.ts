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

  ngOnInit() { }

  saveUserForm( form: NgForm ){
    //this.usersService.selectedUser = form.value as UsersModel;
    this.usersService.postUser( form.value )
      .subscribe( res => {
        this.userLoged(res as UsersModel);
      });  
  }

  loginUserForm( form: NgForm ){

    this.usersService.validateUser( form.value as UsersModel )
      .subscribe( res => {
        if(res){
          this.userLoged(res as UsersModel);
        } else{
          console.log("Fallo");
        }
      });
  }

  userLoged( user: UsersModel ){
    this.menuLogin = true;
    console.log("User loged", user.userName);
    this.usersService.selectedUser = user;
    //this.cleanForm();
    this.usersService.loged = true;
  }


  cleanForm(){
    this.usersService.selectedUser = new UsersModel();
  }

}
