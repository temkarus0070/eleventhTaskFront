import {User} from "./User";
import {Message} from "./Message";

export interface Chat{
  type:ChatType,
  chatOwner:User,
  id:number,
  messages:Message[],
  name:string
}

export enum ChatType{

  GROUP,
  PRIVATE,
  ROOM,
  ANY
}
