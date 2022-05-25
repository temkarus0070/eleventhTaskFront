import {Component, OnInit} from '@angular/core';
import {Chat, ChatType} from "../../models/Chat";
import {ChatService} from "../../services/chat.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-chat',
  templateUrl: './create-chat.component.html',
  styleUrls: ['./create-chat.component.css']
})
export class CreateChatComponent implements OnInit {
  chat:Chat={id:-1,type:ChatType.PRIVATE,messages:[]};

  constructor(private chatService:ChatService,private router:Router) { }

  ngOnInit(): void {
  }

  isNotPrivate():boolean{
    return this.chat.type!==ChatType.PRIVATE;
  }

  isGroupChat():boolean{
    return this.chat.type===ChatType.GROUP;
  }

  create() {
    this.chatService.createChat(this.chat).subscribe(id=>{
      this.router.navigateByUrl(`/chat?id=${id}&&chatType=${this.chat.type}`)
    },error => alert("error "+JSON.stringify(error)));
  }
}
