import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SecurityRoutingModule } from './security-routing.module';




@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class SecurityModule { }
