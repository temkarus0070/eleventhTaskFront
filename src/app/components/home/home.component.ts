import { Component, OnInit } from '@angular/core';
import {ChatService} from "../../services/chat.service";
import {Chat} from "../../models/Chat";
import {HttpErrorResponse} from "@angular/common/http";
import {BACKEND} from "../../app.module";
import {AuthServiceService} from "../AUTH/auth-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public chats:Chat[]=[]
  public auth=true;
  constructor(private chatService:ChatService,private authService:AuthServiceService,private router:Router) {
chatService.getMyChats().subscribe(chats=>this.chats=chats,(error:HttpErrorResponse) => {
  if (error.url===`${BACKEND}/login`){
    this.auth=false;
    console.log("not auth")
  }
  else console.log("has auth")
});
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    location.reload();
  }

  login() {
    this.router.navigateByUrl("/login");
  }

  createNewChat() {
    this.router.navigateByUrl("/chat/create")
  }
}
