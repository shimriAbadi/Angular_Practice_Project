import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';
import {
  Observable
} from 'rxjs';
import {
  switchMap
} from 'rxjs/operators';
import {
  Pupil
} from '../Pupil';
import {
  PupilService
} from '../pupil.service';

@Component({
  selector: 'app-pupils-list',
  templateUrl: './pupils-list.component.html',
  styleUrls: ['./pupils-list.component.css']
})
export class PupilsListComponent implements OnInit {

  pupils!: Observable < Pupil[] > ;
  selectedID: string | null | undefined

  constructor(private pupilService: PupilService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.pupils = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedID = params.get('id')
        return this.pupilService.getPupil()
      })
    )
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

}
