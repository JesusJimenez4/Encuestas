import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProtectorGuard implements CanActivate {
  constructor(private cookieService: CookieService, private router: Router){
  }
  
  redirect(flag: boolean): boolean {
    if( !flag){
      this.router.navigate(['/', 'login'])
    }
    return flag;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.redirect(!!localStorage.getItem('token'));

  } 
  
}
