import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule, MatIconModule, MatToolbarModule, MatListModule, MatCardModule, MatTableModule, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatPaginatorModule, MatTabGroup, MatTabsModule, MatSpinner, MatProgressSpinnerModule } from '@angular/material';
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
    MatInputModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatTabsModule,
    MatProgressSpinnerModule
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
