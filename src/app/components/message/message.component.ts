import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/User";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

 @Input() public text: string | undefined;
  @Input() public user: User | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
