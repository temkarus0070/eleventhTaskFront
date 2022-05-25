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

  public sendMessage(message:Message,id:number):Observable<any>{
    return this.httpClient.post(BACKEND+"/api/messages",message,{params:{chatId:id}});
  }

  public createChat(chat:Chat):Observable<number>{
    return this.httpClient.post<number>(BACKEND+"/api/chat/create",chat,{params:{type:chat.type}});
  }

  public getChat(id:number, chatType:ChatType):Observable<Chat>{
    return this.httpClient.get<Chat>(BACKEND+"/api/chat/getChat",{params:{chatId:id,chatType:chatType}});
  }
}
