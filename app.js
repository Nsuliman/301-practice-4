'use strict';

// For testing 
console.log(' ---------------------------- Testing ----------------------------------------'); 
console.log(' Hello All in Our Node.js \n\n');


//1.Read in the contents of a.json file with the contents given below
console.log(' ---------------------------- 1st Feature-Read JSON File ----------------------------------------\n'); 
let fileJson = require('./a.json')
console.log('fileJson : ',fileJson);


//2.Output a list of each property of the object and it's value, separated by a colon.
console.log('\n\n---------------------------- 2nd Feature-Output Each Properties ---------------------------------\n'); 
let jsonToArr = [fileJson];
// console.log('jsonToArr : ', jsonToArr);

jsonToArr.forEach(eachProp =>
    {
        console.log('name : ', eachProp.name);
        console.log('pets : ', eachProp.pets);
        console.log('childern : zach :' , eachProp.children.zach.age , '      allie :',eachProp.children.allie.age );
        console.log('job : ', eachProp.job);
    });


//3.Output a list (array) of all pets that start with the letter 'R'
console.log(' \n\n---------------------------- 3rd Feature-Output All pets with R ---------------------------------\n'); 

jsonToArr.filter ( eachPet =>
    {
        if (eachPet.pets)
        {
            eachPet.pets.filter(r =>
                {
                    let indx = r.charAt(0);
                    if ( indx === 'R')
                    console.log('Pets Starts With R : ', r);
                })
        }
    });

//4.Create a new instance of "Person" for each child, with the properties "name" and "age"
console.log(' \n\n---------------------------- 4th Feature-Output new instance of childs ---------------------------\n'); 

function Person (name,age)
{
    this.name = name;
    this.age = age;
    this.dogAge = age * 7 ;
    Person.all.push(this);
}
Person.all =[];


let allKeys = Object.keys(fileJson.children);          //[zach,allie]
let zachkey = Object.keys(fileJson.children)[0];       // zach
let allieKey = Object.keys(fileJson.children)[1];      // allie

let allVals = Object.values(fileJson.children);          //[ { age: 21 }, { age: 14 } ]
let zachVal = Object.values(fileJson.children)[0].age;       // zach
let allieVal = Object.values(fileJson.children)[1].age;      // allie

let zach = new Person (zachkey , zachVal);
let allie = new Person (allieKey , allieVal);

console.log(' zach Instance : ', zach , '\n allie Instance : ' ,  allie);


//5.Create a method for a Person instance that outputs their age in dog years (their current age * 7)
console.log(' \n\n---------------------------- 5th Feature-Output children age in dogs years ----------------------\n'); 

Person.prototype.dogYears = function () {
    let dogY = this.age*7;
    console.log(`dog years age for ${this.name} : `, dogY);
}
zach.dogYears();
allie.dogYears();


//6.For each Person in the children array, output their name, current age, and age in dog years
console.log(' \n\n---------------------------- 6th Feature-Output children Name,Age and DoyAge -------------------\n'); 

// Person.all =[];                                          // created after the constructor function directly 
//Add this properties to the consturctor function ( this.dogAge = age * 7 ;)
console.log('Person.all : ' , Person.all, '\n\n');

