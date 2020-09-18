import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShortUrlBuilderRoutingModule } from './short-url-builder-routing.module';
import { ShortUrlBuilderComponent } from './short-url-builder.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MaterialModule} from '../shared/material.module'
@NgModule({
  imports: [
    CommonModule,
    ShortUrlBuilderRoutingModule,
    MaterialModule
  ],
  declarations: [ShortUrlBuilderComponent, MainContentComponent, SideNavComponent, ToolbarComponent]
})
export class ShortUrlBuilderModule { }
