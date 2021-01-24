import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.css']
})
export class UserReposComponent implements OnInit {
  username: string = '';
  currentUser: any;
  repos: any;
  showDetails: boolean = false;
  changeBackgroundColor = false;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {

    this.route.params
      .subscribe(params => {
        this.username = params['username'];
        this.userService.getUser(this.username)
        .subscribe(user => this.currentUser = user)
        this.userService.getUserRepos(this.username)
          .subscribe(repos => this.repos = repos)
      })
  }

  showHideDetails(){
    this.showDetails = !this.showDetails
  }

  changeBackground(val: boolean){
    this.changeBackgroundColor = val;
  }
}
