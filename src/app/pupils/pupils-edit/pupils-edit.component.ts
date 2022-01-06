import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Pupil } from '../Pupil';
import { PupilService } from '../pupil.service';

@Component({
  selector: 'app-pupils-edit',
  templateUrl: './pupils-edit.component.html',
  styleUrls: ['./pupils-edit.component.css']
})
export class PupilsEditComponent implements OnInit {

  constructor(private pupilsService:PupilService,private route:ActivatedRoute,private router:Router) { }

  pupil!:Observable<Pupil>;
  innerHigh!:number;

  ngOnInit(): void {
    this.pupil = this.route.paramMap.pipe(
      switchMap((params:ParamMap)=>
      this.pupilsService.getPupilByID(params.get('id')))
    )
    this.innerHigh = window.innerHeight
  }

  avgGrade(pupil: Pupil): number {
    let sumGrade: number = 0;
    let finalAVG: number = 0;
    let counter: number = 0;

    pupil.gradeInfo.forEach(grade => {
      sumGrade += grade.grade;
      counter += 1
    });
    finalAVG = sumGrade / counter
    return Math.round(finalAVG * 100) / 100;
  }

  goBack(){
    this.router.navigate(['/pupils-list'])
  }

}
