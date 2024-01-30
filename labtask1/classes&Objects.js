class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

speak(){
    console.log(`Hello! My name is ${this.name}.`);
    }
}

const john = new Person('John',20);
john.speak();

class Student extends Person{

    constructor(name,age,grade){
        super(name,age);
        this.grade = grade;
    }
    study(){
        console.log(`${this.name} 's grade is ${this.grade}.`)
    }
}