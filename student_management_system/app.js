import inquirer from "inquirer";
import chalk from "chalk";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
// Courses
export class Course {
    constructor(id, name) {
        this.students = [];
        this.id = id;
        this.name = name;
    }
    // Enrolling students into the course
    enrollStudent(student) {
        this.students.push(student);
    }
    // Not sure what this is doing
    setTeacher(teacher) {
        this.teacher = teacher;
    }
}
class Teacher extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
        this.courses = [];
        this.allstudent = [];
    }
    // Assigning Course to the Teacher
    assignCourse(course) {
        this.courses.push(course);
    }
    // Teacher adding new student
    addNewStudent(student) {
        this.allstudent.push(student);
    }
    // Teacher can go through each student record
    showAllStudents() {
        return this.allstudent.map((s) => s);
    }
    // Teacher can go through which courses are taught by him/her.
    showCoursesTaughtByTeacher() {
        return this.courses.map((t) => t);
    }
}
// Students
class Student extends Person {
    constructor(rollNumber, name, age) {
        super(name, age);
        this.rollNumber = rollNumber;
        this.course = [];
    }
}
// Console Questions
const mainMenu = async () => {
    const { action } = await inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "Select an action:",
            choices: ["Add Student", "Show All Teachers", "Show All Students", "Assign Course to Teacher",
                "Add Teacher", "Add Course", "Start Main Menu", "Exit"],
        },
    ]);
    switch (action) {
        case "Add Student":
            await addNewStudent();
            break;
        case "Show All Students":
            await showAllStudents();
            break;
        case "Assign Course to Teacher":
            await assignCourseToTeacher();
            break;
        case "Add Teacher":
            await addNewTeacher();
            break;
        case "Add Course":
            await addNewCourse();
            break;
        case 'Show All Teachers':
            await showAllTeachers();
            break;
        case "Start Main Menu":
            mainMenu();
            break;
        case "Exit":
            console.log("Goodbye!");
            process.exit(0);
    }
};
mainMenu();
const teachers = [];
const courses = [];
const students = [];
const addNewStudent = async () => {
    const studentInfo = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter student name:",
        },
        {
            type: "input",
            name: "age",
            message: "Enter student age:",
            validate: (value) => !isNaN(parseInt(value)) || "Please enter a valid age",
            filter: (value) => parseInt(value),
        },
        {
            type: "input",
            name: "rollNumber",
            message: "Enter student roll number:",
            filter: (value) => parseInt(value),
        },
    ]);
    const student = new Student(studentInfo.rollNumber, studentInfo.name, studentInfo.age);
    students.push(student);
    console.log(chalk.green("Student Added!"));
    await mainMenu();
};
const showAllStudents = async () => {
    console.log("All Students:");
    students.forEach((student) => {
        console.table(`- Name: ${student.name}, Age: ${student.age}, Roll Number: ${student.rollNumber}`);
    });
    await mainMenu();
};
const showAllTeachers = async () => {
    console.log('All Teachers');
    teachers.forEach((teacher) => {
        console.log(`Name: ${teacher.name}, Age: ${teacher.age}, 
        Courses Teaching: ${teacher.courses.forEach((course) => course.name)}`);
        // Courses Teaching: ${teacher.courses.map((course) => (course.name))}`)
    });
    await mainMenu();
};
const assignCourseToTeacher = async () => {
    const courseInfo = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter course name:",
        },
        {
            type: "input",
            name: "teacherName",
            message: "Enter teacher's name:",
        },
    ]);
    const teacher = teachers.find((t) => t.name === courseInfo.teacherName);
    if (!teacher) {
        console.log("Teacher not found!");
        mainMenu();
        return;
    }
    const course = new Course(courses.length + 1, courseInfo.name);
    course.setTeacher(teacher);
    courses.push(course);
    console.log(chalk.green("Course assigned to the teacher!"));
    await mainMenu();
};
const addNewTeacher = async () => {
    const teacherInfo = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter teacher name:",
        },
        {
            type: "input",
            name: "age",
            message: "Enter teacher age:",
            validate: (value) => !isNaN(parseInt(value)) || "Please enter a valid age",
            filter: (value) => parseInt(value),
        },
        {
            type: "input",
            name: "salary",
            message: "Enter teacher salary:",
            validate: (value) => !isNaN(parseInt(value)) || "Please enter a valid salary",
            filter: (value) => parseInt(value),
        },
    ]);
    const teacher = new Teacher(teacherInfo.name, teacherInfo.age, teacherInfo.salary);
    teachers.push(teacher);
    console.log(chalk.green("Teacher Added!"));
    await mainMenu();
};
const addNewCourse = async () => {
    const courseInfo = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter course name:",
        },
    ]);
    const course = new Course(courses.length + 1, courseInfo.name);
    courses.push(course);
    console.log(chalk.green("Course Added!"));
    await mainMenu();
};
