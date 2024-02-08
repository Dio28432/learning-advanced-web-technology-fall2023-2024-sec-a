import { Teacher } from './teacher';
import { Student } from './student';
import { Course } from './course';

const teacher = new Teacher('Alamin');
const student1 = new Student('Sajid');
const student2 = new Student('Humayra');

const course = teacher.createCourse('Advance Web Technologies');

student1.enrollInCourse(course);
student2.enrollInCourse(course);

console.log(course.teacher);
console.log(course.name);
console.log(course.students);