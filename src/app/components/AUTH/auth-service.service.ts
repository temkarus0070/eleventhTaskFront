import { Injectable } from '@angular/core';
import {Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {BACKEND} from "../../app.module";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private httpClient:HttpClient) { }

  public register(login:string,password:string):Observable<any>{
return this.httpClient.post(BACKEND+"/api/auth/register",{username:login,password:password});
  }

  public login(login:string,password:string):Observable<boolean>{
   return  this.httpClient.post<boolean>(BACKEND+"/api/auth/login",{username:login,password:password}).pipe(tap(e=>{
     if(e){
        var token="Basic "+btoa(login+":"+password);
        localStorage.setItem("token",token);
      }
    } ));
  }


  public logout(){
    localStorage.removeItem("token");
  }

}
