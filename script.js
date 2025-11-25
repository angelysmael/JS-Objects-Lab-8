const student = {
    name: "Angel",
    age: 20,
    enrolled: true,
    courses: ["CPAN113", "CPAN134", "CPAN133"],

    displayInfo() {
        return `${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}`;
    }
};
@@ -7,4 +7,8 @@ const student = {
    displayInfo() {
        return `${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}`;
    }
};
};

console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Student info:", student.displayInfo)