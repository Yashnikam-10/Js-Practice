// object 
// output: Hi, I am undefined
// const person = {
//     name: 'Yash',
//     age: 20,
//     greet: () => {
//         console.log('Hi, I am ' + this.name);
//     }
// }

// person.greet();

// Solution-1
// output: Hi, I am Yash

// const person = {
//     name: 'Yash',
//     age: 20,
//     greet: function() {
//         console.log('Hi, I am ' + this.name);
//     }
// }

// person.greet();

// Solution-2
// output: Hi, I am Yash

const person = {
    name: 'Yash',
    age: 20,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
}

// person.greet();

const hobbies = ['Cooking', 'Reading', 'Climbing'];
// for (let hobby of hobbies) {
//     console.log(hobby);
// }
// let i = 0;
// console.log(hobbies.map(hobby => {
//     i++;
//     return('Hobby '+ i + ': ' + hobby);
// }));

// .map((element, index) => {...})
// console.log(hobbies.map((hobby, i) => {
//     return('Hobby '+ (i+1) + ': ' + hobby);
// }));
// console.log(hobbies);

const copiedArray_1 = hobbies.slice();
const nestedArray = [hobbies];

// use spread operator
const copiedArray_2 = [...hobbies];

console.log(copiedArray_1);
console.log(copiedArray_2);
console.log(nestedArray);

// use spread operator to copy an object

const copied_person = {...person};
console.log(copied_person);

// rest operator - used to merge multiple arguments into an array
const toArray = (...args) => {
    return args;
}

console.log(toArray(1, 2, 3, 4));