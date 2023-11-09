import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatSortModule } from '@angular/material/sort'

const modules = [
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatPaginatorModule, 
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatSortModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules
  ],
  exports:[
    ...modules
  ]

})
export class MaterialModule { }
