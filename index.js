var obj;
console.log(obj)

const person = {
    firstName: 'john',
    lastNmae: 'DEO',
    age: null,
}
document.getElementById('nate').innerHTML = person.age = "years old."
console.log(typeof null);
document.getElementById('ne').innerHTML  = 5 + 6;
console.log(typeof null);
let x;
x=5;
x='john';
console.log(x);
const myJSON = '{ "name":"John", "age": 30, "cars":["Ford","Bmw","Fiat"] }';
const myObj = JSON.parse(myJSON);
let text = "";
for(let i in myObj.cars) {
    text += myObj.cars[i] + ", ";
}
console.log(text);
let answer = true;
if (answer === false) {
    console.log(0)
} else {
    console.log(10);
}
const b = 6 % 2;
const a = b ? 'one' : 'two';
console.log(a)