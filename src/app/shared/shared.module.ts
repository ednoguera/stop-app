import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginFormComponent } from './login-form/login-form.component';



@NgModule({
  declarations: [
    NavbarComponent,
    LoginFormComponent
  ],
  exports: [
    NavbarComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
