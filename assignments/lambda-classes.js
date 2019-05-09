class Person {
    constructor({name, age, location}) {
        this.name = name;
        this.age = age;
        this.location = location;
    }
}

class Instructor extends Person {
    constructor({name, age, location, specialty, favLanguage, catchPhrase}) {
        super({name, age, location});
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }

    demo(subject) {
        return `today we are learning about ${subject}`
    }
    
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }

}