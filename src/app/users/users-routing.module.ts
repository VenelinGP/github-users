import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserReposComponent } from './user-repos/user-repos.component';

const routes: Routes = [
  {path: '', component: UserListComponent},
  {path: ':username', component: UserReposComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
