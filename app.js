'use strict';

// For testing 
console.log(' ---------------------------- Testing ----------------------------------------'); 
console.log(' Hello All in Our Node.js \n\n');


//1.Read in the contents of a.json file with the contents given below
console.log(' ---------------------------- 1st Feature-Read JSON File ----------------------------------------'); 
let fileJson = require('./a.json')
console.log('fileJson : ',fileJson);


//2.Output a list of each property of the object and it's value, separated by a colon.
console.log(' ---------------------------- 2nd Feature-Output Each Properties ---------------------------------'); 
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
console.log(' ---------------------------- 3rd Feature-Output All pets with R ---------------------------------'); 

jsonToArr.filter ( eachPet =>
    {
        if (eachPet.pets)
        {
            eachPet.pets.filter(r =>
                {
                    let indx = r.charAt(0);
                    if ( indx === 'R')
                    console.log('r : ', r);
                })
        }
    });