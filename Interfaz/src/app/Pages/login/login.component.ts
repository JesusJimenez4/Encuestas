import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../../Services/login.service';
import { Router } from '@angular/router';
import { Usuario } from '../../Models/Usuario.model';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  login: Usuario=new Usuario();
  public form: FormGroup = new FormGroup({});
  @Output() emitirRegistro:EventEmitter<any> = new EventEmitter();
  
  constructor(private formBuilder: FormBuilder, private LoginService: LoginService , private cookieService: CookieService, private router: Router ) { }

  ngOnInit(): void {
  }

  IniciarSesion()
  {
    this.LoginService.post(this.login)
    .subscribe((res: any) => {
      console.log(res);
      
      localStorage.setItem('token', res.token);
      this.cookieService.set('token_access', res.token);
      var decodedHeader = jwtDecode(res.token,{header: true});
      console.log(decodedHeader);
      this.router.navigateByUrl('/inicio');
      this.emitirRegistro.emit();
   
    })
    
  }

}
