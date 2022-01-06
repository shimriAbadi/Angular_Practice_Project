import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PupilsRoutingModule } from './pupils-routing.module';
import { PupilsListComponent } from './pupils-list/pupils-list.component';
import { PupilsEditComponent } from './pupils-edit/pupils-edit.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PupilsListComponent,
    PupilsEditComponent
  ],
  imports: [
    CommonModule,
    PupilsRoutingModule,
    FormsModule
  ]
})
export class PupilsModule { }
