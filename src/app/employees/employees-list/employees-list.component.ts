import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Employee } from '../Employee';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees!:Observable<Employee[]>;
  selectedID: string | null | undefined

  constructor(private employeeService:EmployeesService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.employees = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedID = params.get('id')
        return this.employeeService.getEmployees()
      })
    )
  }

}
