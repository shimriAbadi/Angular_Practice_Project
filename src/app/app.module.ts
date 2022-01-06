import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeachersModule } from './teachers/teachers.module';
import { TeacherEditComponent } from './teachers/teacher-edit/teacher-edit.component';
import { FormsModule } from '@angular/forms';
import { EmployeesModule } from './employees/employees.module';
import { PupilsModule } from './pupils/pupils.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherEditComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    TeachersModule,
    EmployeesModule,
    PupilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
