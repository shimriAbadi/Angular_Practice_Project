import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TEACHERS } from './dummy-data-teacher';
import { Teacher } from './Teacher';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor() { }

  getTeachers():Observable<Teacher[]>{
    return of(TEACHERS)
  }

  getTeacherByID(TeacherID:string | null | undefined){
    return this.getTeachers().pipe(
      map(
        (t:Teacher[])=>t.find(teacher=>teacher.id === TeacherID)!
        )
    )
  }

}
