import { std } from "../interfaces/shape.js";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
// Students 
export class Student extends Person {
    constructor(student, name, age) {
        super(name, age);
        this.student = student;
    }
    // Get List of all the student
    getCurrentStds() {
        return this.student.map((s) => s);
    }
    // Add New student to the list
    addNewStudents(student) {
        return this.student.push(student);
    }
    // Find student by name
    getInfoAboutStd(stdName) {
        if (stdName) {
            // return this.
            return this.student.filter(sname => this.name === stdName);
        }
    }
}
// Creating Instances of a student 
const s = new Student(std, 'Ali Jawwad', Math.floor(Math.random() * (9 * (Math.pow(10, 4)))) + (Math.pow(10, 4)));
const s1 = new Student(std, 'Ali Jawwad', Math.floor(Math.random() * (9 * (Math.pow(10, 4)))) + (Math.pow(10, 4)));
const s2 = new Student(std, 'Ali Jawwad', Math.floor(Math.random() * (9 * (Math.pow(10, 4)))) + (Math.pow(10, 4)));
// Adding New Student  
// s.addNewStudents({
//     id: Math.floor(Math.random() * (9 * (Math.pow(10, 4)))) + (Math.pow(10, 4)),
//     name: "Hussain", 
//     courses: ['blockchain', 'cloud computing'] 
// }) 
// console.log("after pushing Current Studentss", s.getCurrentStds())
console.log("Student Infoo ==>>", s.getInfoAboutStd('Ali Jawwad'));
// Course
class Courses {
    constructor(coursename) {
        this.coursename = coursename;
    }
    availableCourse() {
        return this.coursename.map((course) => course);
    }
    addNewCourse(course) {
        return this.coursename.push(course);
    }
}
// const c: Courses = new Courses(['artificial intelligence', 'cloud computing', 'blockchain', 'internet of things'])
// console.log('new course', c.addNewCourse('Flutter'))
// console.log('new course', c.addNewCourse('Database management'))
// console.log('new course', c.addNewCourse('CSS'))
// console.log("Course available", c.availableCourse())
