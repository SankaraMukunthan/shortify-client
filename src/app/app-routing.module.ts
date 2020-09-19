import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
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
