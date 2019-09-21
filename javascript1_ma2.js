//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance

function Dog(name, breed, size, colour, lifespan) {
    this.name = name;
    this.breed = breed;
    this.size = size;
    this.colour = colour;
    this.lifespan = lifespan;
};

var dog1 = new Dog('Dixy', 'Cavalier King Charles Spaniel', 'medium', 'brown', 'medium'); //Example 1
var dog2 = new Dog('Dina', 'Grand Danois', 'extra large', 'black', 'short'); //Example 2


//2. Create an array of numbers from 1 - 10; slice the 5th number in the array
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
numberArray.slice(4, 5);


//3. Delete the last number in the array that you created above.
numberArray.pop();


//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 
//Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.
function replaceWord(){
var strawberry = "Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.";
var banana = strawberry.replace(/strawberry/gi, "banana").replace(/strawberries/gi, "bananas");
console.log(banana);
};
console.log(replaceWord());


//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.
var football = ['Brann', 'Rosenborg', 'Start', 'Lyn',];
document.getElementById("demo").innerHTML = football;

function changeArray() {
    football.splice(0, 4, 'Saab', 'Toyota', 'Tesla', 'Nissan');
    document.getElementById("demo").innerHTML = football;
};


//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.
var people = [
    {job: 'Teacher', name: 'Knut'},
    {job: 'Author', name: 'Frida'},
    {job: 'Model', name: 'Atalya'},
];

var person = people.filter(function(job){
    return (job.name === 'Atalya');
});

    
//7. Create a simple function that logs the date.
var theDate = new Date();

console.log(theDate);


