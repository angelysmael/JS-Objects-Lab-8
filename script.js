const student = {
    name: "Angel",
    age: 20,
    enrolled: true,
    courses: ["CPAN113", "CPAN134", "CPAN133"],

    displayInfo() {
        return `${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}`;
    }
};