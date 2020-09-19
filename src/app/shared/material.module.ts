import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule, MatIconModule, MatToolbarModule, MatListModule, MatCardModule, MatTableModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';

const usedMaterialModules = [
  MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
]
@NgModule({
  imports: [
    CommonModule,
    ...usedMaterialModules   
  ],
  exports:[
    usedMaterialModules
  ],
  declarations: []
})
export class MaterialModule { }
