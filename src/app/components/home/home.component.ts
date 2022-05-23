import { Component, OnInit } from '@angular/core';
import {ChatService} from "../../services/chat.service";
import {Chat} from "../../models/Chat";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public chats:Chat[]=[]
  constructor(private chatService:ChatService) {
chatService.getMyChats().subscribe(chats=>this.chats=chats);
  }

  ngOnInit(): void {
  }

}
