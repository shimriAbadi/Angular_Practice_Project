import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Employee } from '../Employee';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employees-edit',
  templateUrl: './employees-edit.component.html',
  styleUrls: ['./employees-edit.component.css']
})
export class EmployeesEditComponent implements OnInit {

  constructor(private employeeService:EmployeesService,private route:ActivatedRoute,private router:Router) { }

  employee!:Observable<Employee>;
  innerHigh!:number;

  ngOnInit(): void {
    this.employee = this.route.paramMap.pipe(
      switchMap((params:ParamMap)=>
      this.employeeService.getEmployeeByID(params.get('id')))
    )
    this.innerHigh = window.innerHeight
  }

  goBack(){
    this.router.navigate(['/employees-list'])
  }

}
