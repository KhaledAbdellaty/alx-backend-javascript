export interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [newProp: string]: any,
}

export interface Directors extends Teacher {
  numberOfReports: number,
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher = (firstName:string, lastName:string) : string => `${firstName.charAt(0)}. ${lastName}`;

export interface IStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

export interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

export default class StudentClass implements IStudentClass{
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework = () : string => 'Currently working';

  displayName = () : string => this.firstName;
}
