import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login-model';
import { delay, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLoggedIn: boolean = false;
  redirectUrl: string = ""; 
  model: LoginModel; 

  constructor() { 
    this.model = new LoginModel("", "");
  }
  login(item: LoginModel) : Observable<boolean> {
    this.model = item; 
    
    // // //simulation only, replace with actual service code later. 
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = true)
    );
    
  }
  logout(item: LoginModel): void {
    this.model = new LoginModel("", ""); 
    this.isLoggedIn = false; 
  }
}
