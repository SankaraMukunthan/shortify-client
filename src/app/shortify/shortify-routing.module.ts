import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyurlListingComponent } from '../myurls/myurl-listing/myurl-listing.component';
import { UrlShortenerCreateComponent } from '../url-shortener/url-shortener-create/url-shortener-create.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ShortifyComponent } from './shortify.component';

const routes: Routes = [
  {
    path: '',
    component: ShortifyComponent,
    children:[
      {
        path:'urlshortener',
        component: UrlShortenerCreateComponent
      },
      {
        path:'myurls',
        component: MyurlListingComponent
      },
      {
        path: '**',
        redirectTo: 'urlshortener'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShortifyRoutingModule { }
