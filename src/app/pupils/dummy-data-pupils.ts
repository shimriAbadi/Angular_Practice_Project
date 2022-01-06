import { coreDep, electricDep, softwareDep } from "../teachers/dummy-data-teacher";
import { Pupil } from "./Pupil";

export const PUPILS:Pupil[]=[
  {
    gradeInfo:[
     {className:'Math',grade:85},
     {className:'Physics',grade:71},
     {className:'English',grade:88}],
    department:coreDep,
    id:'78UIS4',
    fullName:'Tony Vu',
    age:23,
    city:'Ariel',
    image:'http://www.tutordoctor.com/images/blog/College-Student.jpg'
  },
  {
    gradeInfo:[
     {className:'Java',grade:73},
     {className:'Python',grade:100},
     {className:'C#',grade:89}],
    department:softwareDep,
    id:'2E34TY',
    fullName:'Eliana James',
    age:19,
    city:'Tel-Aviv',
    image:'https://www.group.ba/wp-content/uploads/2018/04/happy-student-in-university.jpg'
  },
  {
    gradeInfo:[
     {className:'Robotics',grade:91},
     {className:'RF',grade:87},
     {className:'Analog Electronic Circuits',grade:79}],
    department:electricDep,
    id:'453TR3',
    fullName:'Zoey Ree',
    age:27,
    city:'Beer Sheva',
    image:'https://avatars.mds.yandex.net/get-altay/1546430/2a0000016e3ca4c2639262b3e80b0f85fa97/XXL'
  },
  {
    gradeInfo:[
     {className:'Calculus',grade:62},
     {className:'Modern Physic',grade:70},
     {className:'Linear Algebra',grade:59}],
    department:coreDep,
    id:'5TYU65',
    fullName:'Maria Snow',
    age:21,
    city:'Tiberias',
    image:'https://www.utahattorneys.com/wp-content/uploads/2018/04/how-to-wipe-out-student-loan-debt.jpg'
  },
  {
    gradeInfo:[
     {className:'Android Development',grade:98},
     {className:'Database Systems',grade:76},
     {className:'Data Structures',grade:96}],
    department:softwareDep,
    id:'5E2341',
    fullName:'Remi Norman',
    age:29,
    city:'Holon',
    image:'https://stayreading.com/wp-content/uploads/2018/01/exam-paas-stayreading.jpg'
  },
  {
    gradeInfo:[
     {className:'Waves',grade:86},
     {className:'Micro Processor and Micro Controller',grade:100},
     {className:'MatLab',grade:80}],
    department:electricDep,
    id:'67ERAS',
    fullName:'Alya Rosas',
    age:25,
    city:'Herzliya',
    image:'https://dicasdeinfra.com.br/wp-content/uploads/2020/01/7-dicas-de-ouro-microsoft.jpg'
  },
  {
    gradeInfo:[
    {className:'Statistics',grade:71},
    {className:'Introduction For Probability',grade:54},
    {className:'Discrete Mathematics',grade:65}],
    department:coreDep,
    id:'45235E',
    fullName:'Stefan Chavez',
    age:28,
    city:'Rishpon',
    image:'https://im0-tub-com.yandex.net/i?id=6e0c58b65b008342c4f9632f4c247188&n=13&exp=1'
  },
  {
    gradeInfo:[{className:'GPU Programing',grade:78},
    {className:'Artificial Intelligence',grade:81}
    ,{className:'Information Theory',grade:80}],
    department:softwareDep,
    id:'43RW23',
    fullName:'Arvin Houston',
    age:31,
    city:'Hadera',
    image:'https://taskcomplete.com/wp-content/uploads/2017/07/College-Student.jpg'
  },
]
