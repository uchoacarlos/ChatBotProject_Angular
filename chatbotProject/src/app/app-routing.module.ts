  
import { ChathomeComponent } from './chathome/chathome.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';



import { AuthGuard } from './guards/auth.guard'
import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';
//import { AdminGuard } from '../guards/admin.guard';

const routes: Routes = [


  { path: '', redirectTo: 'chathome', pathMatch: 'full'},


  { path: 'security', loadChildren: () => import('./security/security.module').then(m => m.SecurityModule) },


  { path: 'chat-dialog', component: ChatDialogComponent, canActivate: [AuthGuard] },
  { path: 'chathome', component: ChathomeComponent, canActivate: [AuthGuard] },

  // -- Resolve o problema de 
  { path: '**', redirectTo: 'chathome', pathMatch: 'full'}


  //{ path: 'login', component: LoginComponent, /*canActivate: [AuthGuard]*/ }



]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }