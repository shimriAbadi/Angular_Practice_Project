import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PUPILS } from './dummy-data-pupils';
import { Pupil } from './Pupil';

@Injectable({
  providedIn: 'root'
})
export class PupilService {

  constructor() { }

  getPupil():Observable<Pupil[]>{
    return of(PUPILS)
  }

  getPupilByID(PupilID:string | null | undefined){
    return this.getPupil().pipe(
      map(
        (t:Pupil[])=>t.find(pupil=>pupil.id === PupilID)!
        )
    )
  }

}
