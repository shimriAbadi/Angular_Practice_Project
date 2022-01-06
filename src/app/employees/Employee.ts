import { Person } from "../Person";

export class Employee extends Person {
  constructor(public jobName:string,public monthlyWorkingHours:number,public costRate:number,id:string,fullName:string,age:number,city:string,image:string){
    super(id,fullName,age,city,image)
  }
}
