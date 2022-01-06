import { Component, OnInit } from '@angular/core';
import { Class } from '../Class';
import { EMPLOYEE } from '../employees/dummy-data-employee';
import { Employee } from '../employees/Employee';
import {DEPLIST, TEACHERS} from '../teachers/dummy-data-teacher'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  innerHigh!:number;
  numberOfTeachers:number = TEACHERS.length;
  numberOfEmployee:number = EMPLOYEE.length;
  departments:Class[]=DEPLIST;
  employees:Employee[]=EMPLOYEE;

  constructor() { }

  ngOnInit(): void {
    this.innerHigh = window.innerHeight
  }

}
