import {User} from "./User";
import {Message} from "./Message";

export interface Chat{
  type:ChatType,
  chatOwner?:User,
  id:number,
  messages:Message[],
  name?:string,
  usersCount?:number,
  userList?:User[]
}

export enum ChatType{

  GROUP="GROUP",
  PRIVATE="PRIVATE",
  ROOM="ROOM",
  ANY="ANY"
}
