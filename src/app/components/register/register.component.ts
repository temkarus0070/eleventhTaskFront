import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../AUTH/auth-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public login:string="";
  public password:string="";
  public error:string="";
  constructor(private authService:AuthServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  public submitRegister(){
    this.authService.register(this.login,this.password).subscribe(E=>{
      if (E){
        this.router.navigateByUrl("/");
      }
      else this.error="данный логин уже занят"
    });
  }

}
