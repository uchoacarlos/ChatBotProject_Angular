import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from '../../security/security.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mostrarMenu: boolean = this.securityService.isLoggedIn();

  constructor(private securityService: SecurityService,
    private router: Router) {


  }

  logout() {
    this.router.navigate(['security', 'login'])
  }

  ngOnInit() {

   this.securityService.mostrarMenuEmitter.subscribe(

      mostrar => this.mostrarMenu = mostrar
    );
  }

}
