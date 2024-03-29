import { Course } from './course';

export class Teacher {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  createCourse(name: string): Course {
    return new Course(name, this);
  }
}