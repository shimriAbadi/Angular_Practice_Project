import { Person } from "../Person";
import { Grades } from "./Grade";
import {Class} from "../Class"

export class Pupil extends Person{


  constructor(public gradeInfo:Grades[],public department:Class,id:string,fullName:string,age:number,city:string,image:string){
    super(id,fullName,age,city,image)
  }

}
