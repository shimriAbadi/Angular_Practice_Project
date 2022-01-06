import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Teacher } from '../Teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-edit',
  templateUrl: './teacher-edit.component.html',
  styleUrls: ['./teacher-edit.component.css']
})

export class TeacherEditComponent implements OnInit {

  teacher!:Observable<Teacher>;
  innerHigh!:number;

  constructor(private teacherService:TeacherService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.teacher = this.route.paramMap.pipe(
      switchMap((params:ParamMap)=>
      this.teacherService.getTeacherByID(params.get('id')))
    )
    this.innerHigh = window.innerHeight
  }

  goBack(){
    this.router.navigate(['/teachers-list'])
  }

}
