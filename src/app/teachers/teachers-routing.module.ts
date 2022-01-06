import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherEditComponent } from './teacher-edit/teacher-edit.component';
import { TeachersListComponent } from './teachers-list/teachers-list.component';

const routes: Routes = [
  {path:"teachers-list" , component:TeachersListComponent},
  {path:"teacher-edit/:id"  ,  component:TeacherEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
