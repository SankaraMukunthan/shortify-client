import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../core/services/auth-guard.service';
import { MyurlListingComponent } from '../myurls/myurl-listing/myurl-listing.component';
import { UrlShortenerCreateComponent } from '../url-shortener/url-shortener-create/url-shortener-create.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ShortifyComponent } from './shortify.component';

const routes: Routes = [
  {
    path: '',
    component: ShortifyComponent,
    canActivate: [AuthGuardService],
    children:[
      {
        path:'urlshortener',
        component: UrlShortenerCreateComponent,
        canActivate: [AuthGuardService]
      },
      {
        path:'myurls',
        component: MyurlListingComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: '**',
        redirectTo: 'urlshortener',
        canActivate: [AuthGuardService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShortifyRoutingModule { }
