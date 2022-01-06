import { Teacher } from "./teachers/Teacher";

export class Class{
  public teacher:Teacher | undefined;
  constructor(
    public id:string,
    public className:string,
    public studentsNumber:number,
    public classAddress:string
  )
  {}
}
