import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Chat, ChatType} from "../models/Chat";
import {BACKEND} from "../app.module";
import {Message} from "../models/Message";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private  httpClient:HttpClient) { }

  public getMyChats():Observable<Chat[]>{
    return this.httpClient.get<Chat[]>(BACKEND+"/api/chat/getAllChatsOfCurrentUser");
  }

  public sendMessage(message:Message):Observable<any>{
    return this.httpClient.post(BACKEND+"/api/messages",message);
  }

  public getChat(id:number, chatType:ChatType):Observable<Chat>{

    return this.httpClient.get<Chat>(BACKEND+"/api/chat/getChat",{params:{chatId:id,chatType:chatType}});
  }
}
