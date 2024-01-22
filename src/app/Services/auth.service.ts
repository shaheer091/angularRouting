import { Injectable, inject } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogged: Boolean = false;
  userService: UserService = inject(UserService);
  login(username: string, password: string) {
    let user = this.userService.users.find((x) => {
      return x.username === username && x.password === password;
    });
    if (user === undefined) this.isLogged = false;
    else this.isLogged = true;
    return user
  }
  logout(){
    this.isLogged=false
  }
  isAuthenticated(){
    return this.isLogged
  }
}
