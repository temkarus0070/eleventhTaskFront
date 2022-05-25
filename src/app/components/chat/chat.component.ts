import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ChatService} from "../../services/chat.service";
import {Chat, ChatType} from "../../models/Chat";
import {Message} from "../../models/Message";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public chat: Chat | undefined;
  public messageText: string="";

  constructor(private activatedRoute:ActivatedRoute,private chatService:ChatService) {

  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(params=>{
      console.log(params);
      if (params.get("id")!==null && params.get("chatType")!==null) {
        var id = Number.parseInt(<string>params.get("id"));
        var type = (<any>ChatType)[params.get("chatType")||"ANY"];
        this.chatService.getChat(id, type).subscribe(chat => {
          this.chat=chat;
        });
      }
    })
  }

  send() {
    var message:Message={content:this.messageText};
    if (this.chat?.id)
    this.chatService.sendMessage(message,this.chat?.id).subscribe(success=>{
      message.sender={username:success}
      this.chat?.messages.push(message);
    },error => alert("error "+JSON.stringify(error)))
  }
}
