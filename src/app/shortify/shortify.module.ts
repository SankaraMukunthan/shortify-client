import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShortifyComponent,  } from './shortify.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MaterialModule} from '../shared/material.module'
import { ShortifyRoutingModule } from './shortify-routing.module';
import { UrlShortenerModule } from '../url-shortener/url-shortener.module';
import { MyurlsModule } from '../myurls/myurls.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from '../core/services/http-interceptor.service';
@NgModule({
  imports: [
    CommonModule,
    ShortifyRoutingModule,
    UrlShortenerModule,
    MyurlsModule,
    MaterialModule
  ],
  declarations: [ShortifyComponent, MainContentComponent, SideNavComponent, ToolbarComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi:true
  }]
})
export class ShortifyModule { }
