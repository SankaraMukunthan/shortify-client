import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [AuthComponent, SignupComponent],
  providers: [AuthService]
})
export class AuthModule { }
