import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://api.github.com'

  constructor(private http: HttpClient) {}

  /*
   * get first 100 GitHub users
   */
   getUsers(){
    return this.http.get(`${this.apiUrl}/users?per_page=100`);
   }
     /*
   * get GitHub user
   */
   getUser(username: string){
    return this.http.get(`${this.apiUrl}/users/${username}`);
   }

  /*
   * get user repos
   */
   getUserRepos(username: string){
    return this.http.get(`${this.apiUrl}/users/${username}/repos`);
   }
}
