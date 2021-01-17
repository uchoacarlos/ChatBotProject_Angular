import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecurityModule } from './security/security.module'
import { SecurityService } from './security/security.service';
import { NavbarComponent } from './core/navbar/navbar.component';
import { AuthGuard } from './guards/auth.guard';
import { ChatModule } from './chat/chat.module';
import { ChathomeComponent } from './chathome/chathome.component';


@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    ChathomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SecurityModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChatModule,
    
  ],
  providers: [
    SecurityService,
    AuthGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
