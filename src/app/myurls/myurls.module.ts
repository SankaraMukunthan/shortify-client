import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyurlListingComponent } from './myurl-listing/myurl-listing.component';
import { MaterialModule } from '../shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { MyurlsService } from './services/myurls.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule
  ],
  declarations: [MyurlListingComponent],
  exports:[MyurlListingComponent],
  providers:[MyurlsService]
})
export class MyurlsModule { }
