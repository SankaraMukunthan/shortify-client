import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlShortenerCreateComponent } from './url-shortener-create/url-shortener-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { CreateShortUrlService } from './services/create-short-url.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  declarations: [UrlShortenerCreateComponent],
  exports:[UrlShortenerCreateComponent],
  providers:[CreateShortUrlService]
})
export class UrlShortenerModule { }
