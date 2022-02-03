// Personal Info

// Creating a class
class Student {
    // Creating a constructor
    constructor (firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // Creating a method of the class
    getStudentProfile(){
        const currentYear = 2020;
        const yearOfBirth = currentYear - this.age;
        const profile = `Full Name: ${this.firstName} ${this.lastName}<br>
Age: ${this.age}<br>
Year Of Birth: ${yearOfBirth}`;
        return profile;
    }
}

document.getElementById('message').style.display = 'none';

form.addEventListener('submit', (e) => {

    e.preventDefault();

    document.getElementById('message').style.visibility = 'block';

    // Get HTML inputs
    let firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const age = document.getElementById('age').value;

    // Call method
    const newStudent = new Student(firstName, lastName, age);

    // Instantiate parameters
    const button = document.getElementById('button');
    const message = document.getElementById('message');
    const form = document.getElementById('form');

    // Call method
    const result = newStudent.getStudentProfile();

    button.style.background = 'rgb(0, 255, 0)';
    message.innerHTML = result;
});
