import {User} from "./User";
import {Message} from "./Message";

export interface Chat{
  type:ChatType,
  chatOwner?:User,
  id:number,
  messages:Message[],
  name?:string,
  usersCount?:number
}

export enum ChatType{

  GROUP="GROUP",
  PRIVATE="PRIVATE",
  ROOM="ROOM",
  ANY="ANY"
}
