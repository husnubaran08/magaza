import { Injectable } from '@angular/core';
import { User } from '../login/user';

@Injectable()
export class AccountService {

constructor() { }
loggedIn = false;
login(user:User):boolean{
  if(user.tc=="1234" && user.password=="12345"){
    this.loggedIn = true;
    localStorage.setItem("isLogged",user.tc);
    return true;
  }
  return false;
}
isLoggedIn(){
  return this.loggedIn;
}
}
