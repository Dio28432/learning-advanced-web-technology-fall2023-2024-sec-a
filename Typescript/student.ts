import { Course } from './course';

export class Student {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  enrollInCourse(course: Course) {
    course.enrollStudent(this);
  }
}