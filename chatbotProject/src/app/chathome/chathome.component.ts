import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../security/security.service';

@Component({
  selector: 'chathome',
  templateUrl: './chathome.component.html',
  styleUrls: ['./chathome.component.css']
})
export class ChathomeComponent implements OnInit {

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