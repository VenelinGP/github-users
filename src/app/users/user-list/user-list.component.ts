import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any;
  sortedByName: string = '';
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // set a timeout to show the loader
    setTimeout(() => {
      this.users = this.userService.getUsers();
    }, 1);
  }

  sortByName(): void{
  
    if(this.sortedByName == '' || this.sortedByName == 'isDesc'){
      this.sortedByName = 'isAsc'
    } else {
      this.sortedByName = 'isDesc'
    }
  }


}
