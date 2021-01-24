import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // set a timeout to show the loader
    setTimeout(() => {
      this.users = this.userService.getUsers();
    }, 3000);
    // this.users = this.userService.getUsers();
  }

}
