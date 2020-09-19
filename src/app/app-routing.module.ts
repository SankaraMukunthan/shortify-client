import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
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
