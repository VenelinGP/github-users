import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserReposComponent } from './user-repos/user-repos.component';
import { WithLoadingPipe } from '../pipes/WithLoadingPipe';
import { LoaderComponent } from '../loader/loader/loader.component';
import { UserDetailsComponent } from './user-details/user-details.component';


@NgModule({
  declarations: [
    UserListComponent, 
    UserReposComponent,
    WithLoadingPipe,
    LoaderComponent,
    UserDetailsComponent

  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
