import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatTabsModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatSortModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatStepperModule
    ],
  exports: [
      MatAutocompleteModule,
      MatExpansionModule,
      MatCheckboxModule,
      MatTabsModule,
      MatSelectModule,
      MatIconModule,
      MatCardModule,
      MatListModule,
      MatSortModule,
      MatInputModule,
      MatTableModule,
      MatButtonModule,
      MatDialogModule,
      MatSidenavModule,
      MatToolbarModule,
      FlexLayoutModule,
      MatFormFieldModule,
      MatProgressSpinnerModule,
      MatDatepickerModule,
      MatStepperModule
  ],
  declarations: []
})
export class AppMaterialModule { }
