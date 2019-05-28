import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  
  constructor( private userService: UsersService ) { }

  ngOnInit() {
  }

}
