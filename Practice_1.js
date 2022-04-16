const username = 'Yash';
let age = 20;
const hasHobbies = true;

function returnString(name, age, hasHobbies) {
    return (
        'Name is ' +  
        name + 
        ', age is ' + 
        age + 
        ' and does user have Hobbies: ' +
        hasHobbies
    );
}

console.log(returnString(username, age, hasHobbies))
