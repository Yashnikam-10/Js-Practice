const username = 'Yash';
let age = 20;
const hasHobbies = true;

const returnString = (name, age, hasHobbies) => {
    return (
        'Name is ' +  
        name + 
        ', age is ' + 
        age + 
        ' and does user have Hobbies: ' +
        hasHobbies
    );
}

//if you are returning a value you can follow this pattern
const add = (a, b) => a+b;

//when the function has no arguments
const addRandom = () => Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);

console.log(add(1, 2))
console.log(addRandom())
console.log(returnString(username, age, hasHobbies))