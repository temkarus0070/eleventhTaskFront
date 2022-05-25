import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../AUTH/auth-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public login:string="";
public password:string="";
public error:string="";
  constructor(private authService:AuthServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  public submitLogin(){
    this.authService.login(this.login,this.password).subscribe(E=>{
      if (E){
        this.router.navigateByUrl("/");
      }
      else this.error="неверный логин или пароль"
    });
  }

}
