import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PupilsEditComponent } from './pupils-edit/pupils-edit.component';
import { PupilsListComponent } from './pupils-list/pupils-list.component';

const routes: Routes = [
  {path:"pupils-list",component:PupilsListComponent},
  {path:"pupil-edit/:id",component:PupilsEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PupilsRoutingModule { }
