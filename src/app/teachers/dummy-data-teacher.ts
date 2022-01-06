import { Class } from "../Class";
import { Teacher } from "./Teacher";

// <------ Electric Department ------>

export let electricDep:Class = new Class('ElectricDep','Electric Engineer',150,'7.2.14')

// <------ Software Department ------>

export let softwareDep:Class = new Class('SoftwareDep','Software Engineer',210,'5.3.25')

// <------ Core Department ------>

export let coreDep:Class = new Class('CoreDep','Core Studies',125,'8.1.9')

export const DEPLIST:Class[]=[
  electricDep,softwareDep,coreDep
]


export const TEACHERS:Teacher[] = [
  {professions:['English','Physic'],classes:[coreDep],seniority:15,monthlyWorkingHours:190,costRate:110,id:"44TGY2",fullName:"Jonas Kakaroto",age:46,city:'Tel-Aviv',image:'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'},
  {professions:['Math'],classes:[coreDep],seniority:6,monthlyWorkingHours:115,costRate:109,id:"34UYI9",fullName:"Kelly Sikkema",age:31,city:'Raanana',image:'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80'},
  {professions:['Python','Data Science','Data Structure'],classes:[softwareDep],seniority:30,monthlyWorkingHours:290,costRate:165,id:"5YDF46",fullName:"Jakob Owens",age:61,city:'Jerusalem',image:'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1939&q=80'},
  {professions:['Robotics','Java'],classes:[softwareDep,electricDep],seniority:2,monthlyWorkingHours:140,costRate:82,id:"9I5E43",fullName:"Daniel Jensen",age:28,city:'Hifa',image:'https://im0-tub-com.yandex.net/i?id=361a2bcae5b439571876562c4fcfbb0a&n=13&exp=1'},
  {professions:['Silicone chips','RF'],classes:[electricDep],seniority:20,monthlyWorkingHours:150,costRate:105,id:"FJ563S",fullName:"Patrik Velich",age:42,city:'Savyon',image:'https://c.pxhere.com/photos/ce/c1/emotions_girl_hair_model_beauty_photoshoot_shirt_long_hair-1290693.jpg!d'},
  {professions:['WebDevelop Bootcamp'],classes:[softwareDep],seniority:12,monthlyWorkingHours:145,costRate:87,id:"2ETR45",fullName:"Hazel Aksoy",age:43,city:'Ariel',image:'http://i.huffpost.com/gen/1346900/thumbs/o-WOMAN-OFFICE-HAPPY-facebook.jpg'},
]
