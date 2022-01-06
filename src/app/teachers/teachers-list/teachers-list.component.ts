import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Teacher } from '../Teacher';
import { TeacherService } from '../teacher.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css']
})
export class TeachersListComponent implements OnInit {

  teachers!:Observable<Teacher[]>;
  selectedID: string | null | undefined

  constructor(
    private teacherService:TeacherService,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.teachers = this.route.paramMap.pipe(
      switchMap(params =>{
        this.selectedID = params.get('id')
        return this.teacherService.getTeachers()
      })
    )
  }

}
