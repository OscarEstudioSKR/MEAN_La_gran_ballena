import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service'
import { NgForm } from '@angular/forms';
import { UsersModel } from 'src/app/models/UsersModel';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  
  constructor( private usersService: UsersService ) { }

  ngOnInit() {
    this.getUsers();
  }

  submitUserForm( form: NgForm ){
    this.usersService.postUser( form.value )
      .subscribe( res => {
        console.log( res );
      });
  }

  getUsers(){
    this.usersService.getUsers()
      .subscribe( res => {
        this.usersService.usersList = res as UsersModel[];
        console.log(res as UsersModel[]);
      })
  }

}
