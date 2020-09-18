import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ShortUrlBuilderComponent } from './short-url-builder.component';

const routes: Routes = [
  {
    path: '',
    component: ShortUrlBuilderComponent,
    children:[
      {
        path:'',
        component: MainContentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShortUrlBuilderRoutingModule { }
