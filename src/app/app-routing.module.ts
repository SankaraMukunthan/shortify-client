import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
    {
        path:"login",
        component:AuthComponent
    },
    {
        path:"signup",
        component:SignupComponent
    },
    {
        path:"forgotpassword",
        component:ForgotPasswordComponent
    },
    {
        path:"reset-password/:token",
        component:ResetPasswordComponent
    },
    {
        path:'shortify',
        loadChildren:'app/shortify/shortify.module#ShortifyModule'
    },
    {
        path:'**',
        redirectTo: 'shortify'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
