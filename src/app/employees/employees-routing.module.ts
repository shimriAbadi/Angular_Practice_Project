import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesEditComponent } from './employees-edit/employees-edit.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';

const routes: Routes = [
  {path:"employees-list",component:EmployeesListComponent},
  {path:"employee-edit/:id",component:EmployeesEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
