import { Class } from "../Class";
import { Person } from "../Person";

export class Teacher extends Person{
  constructor(
    public professions:string[],
    public classes:Class[],
    public seniority:number,
    public monthlyWorkingHours:number,
    public costRate:number,
    id:string,
    fullName:string,
    age:number,
    city:string,
    image:string
    ){
      super(id,fullName,age,city,image)
    }
}
