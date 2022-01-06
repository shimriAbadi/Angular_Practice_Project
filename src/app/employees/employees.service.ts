import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { EMPLOYEE } from './dummy-data-employee';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }

  getEmployees():Observable<Employee[]>{
    return of(EMPLOYEE)
  }

  getEmployeeByID(employeeID:string | null | undefined){
    return this.getEmployees().pipe(
      map(
        (t:Employee[])=>t.find(employee=>employee.id === employeeID)!
        )
    )
  }

}
