import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../security/security.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {

  constructor(private securityService: SecurityService) { }

  userName: any;

  ngOnInit(): void {
    this.getUser();
  }

  private getUser() { 
    this.userName = this.securityService.getUser();
    console.log('user name: ' + this.userName);
  }
}