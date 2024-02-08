"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
    }
    Student.prototype.enrollInCourse = function (course) {
        course.enrollStudent(this);
    };
    return Student;
}());
exports.Student = Student;
