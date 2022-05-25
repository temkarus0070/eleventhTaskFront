import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/User";
import {BACKEND} from "../app.module";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  public getAllExceptMe():Observable<User[]>{
    return this.httpClient.get<User[]>(BACKEND+"/api/user/getAllUsersExceptMe");
  }
}
