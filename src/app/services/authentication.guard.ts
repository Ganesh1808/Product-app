import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router) {
    
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    
    let url: string = state.url; 
    return this.checkLogin(url);
  }
  checkLogin(url: string): boolean{
    if (this.authService.isLoggedIn) return true; 
    this.authService.redirectUrl = url; 
    this.router.navigate(["/login"]);
    return false;
  }
}
