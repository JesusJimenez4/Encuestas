import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private cookieService: CookieService, public router: Router) { }

  ngOnInit(): void {
  }
  Exit(){
    localStorage.getItem('token');
      localStorage.removeItem('token');
      this.router.navigateByUrl('/inicio');
  }
}
