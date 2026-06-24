// // // // console.log("Hello, World!")
// // // // let name = "John Doe";
// // // // let age = 30;
// // // // console.log(name);
// // // // console.log(age);
// // // // console.log(2+2)
// // // // const PI = 3.14;
// // // // let radius = 5;
// // // // let area = PI * radius * radius;
// // // // console.log("Area of circle: " + area);

// // // let score = null
// // // console.log(score)
// // // let value = Number(score)
// // // console.log(value)
// // // score = "32abc"
// // // value = Number(score)
// // // console.log(value)
// // // console.log("\n hello world")
// // // for (let i = 0; i < 5; i++) {
// // //     console.log(i)
// // // }
// // // do{

// // // }while(false)



// // // console.log("2"===2)

// // // const id = Symbol('123');
// // // const id2 = Symbol('123');
// // // console.log(id);
// // // console.log(id2);
// // // console.log(id === id2);

// // // let score = 67;
// // // console.log(typeof (score));

// // const person = {
// //     name: "John Doe",
// //     age: 30
// // }

// // let per = person;
// // console.log(per);
// // per.name = "Jane Doe";
// // console.log(person.name);
// // const a = new Number(512.295);
// // console.log(a.toFixed(0));
// // console.log(a.toPrecision(4));
// // console.log(a.toPrecision(2));

// // const numbers = [1, 2, 3, 4, 5];
// // console.log(Math.max(...numbers));

// // // Date and time basics

// // let date = new Date();
// // console.log(date.toString());
// // console.log(date.toDateString());
// // console.log(date.toLocaleString());



// // ******************Date and time basics******************




// let mydate = new Date();
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());   // this will print the date and time in the local format and timezone so this is imp
// console.log(typeof(mydate));

// let mydate2 = new Date(2024, 5,15,10,30,15); // year, month (0-11), day, hour, minute, second
// console.log(mydate2.toString());
// console.log(mydate2.toDateString());
// console.log(mydate2.toLocaleString());

// //  ***** Declaration of date  *****
// let my_created_date = new Date(2024, 5, 15, 10, 30, 15);
// let my_date2 = new Date("2024-06-15");
// console.log(my_created_date);
// //  ****** To get date in seconds *****
// let mytimestamp = Date.now();
// //  This is used to get  time in seconds so that we can use this as a timestamp for various purposes like storing in database or comparing dates
// console.log(Math.floor(mytimestamp/1000)); // this will give the timestamp in seconds  in sec from 1970-01-01 00:00:00 UTC


// let newDate = new Date();
// console.log(newDate.toLocaleString('default', { weekday: 'long' })); // This will print the day of the week in long format like Monday, 
// // Tuesday, etc.
// console.log(newDate.toLocaleString());





//  ******* Arrays in JavaScript *******

function Add_array_elements(arr, element) {
    arr.push(element);
    return arr;
}





const myArray = [1, 2, 3, 4, 5];
console.log(myArray);
console.log(myArray.length);
console.log(myArray[0]);
console.log(myArray[myArray.length - 1]); // This will print the last element of the array

// ******** To create an array using the Array constructor ********
const myArray2 = new Array(); 
console.log(myArray2);
// console.log(myArray2);
myArray2.push(6); // Adds 6 to the end of the array
myArray2.push(7); // Adds 7 to the end of the array
myArray2.push(8); // Adds 8 to the end of the array
console.log(myArray2);
console.log("The length of myArray2 is: ",myArray2.length);
myArray2.pop();  // Removes the last element of the array
console.log(myArray2);
myArray2.unshift(0); // Adds 0 to the beginning of the array
console.log(myArray2);
myArray2.shift();
console.log(myArray2);  // Removes the first element of the array

console.log(myArray2.includes(9)); // This will check if 9 is present in the array or not and return true or false
console.log(myArray2.includes(7)); // This will check if 7 is present in the array or not and return true or false
console.log(myArray2.indexOf(7)); // This will return the index of 7 in the array
console.log(myArray2.indexOf(9)); // This will return -1 as 9 is not present in the array
const newArr = myArray2.join();
console.log(newArr); // This will join the elements of the array and return a string
const newArr2 = myArray2;
console.log(newArr2); // This will print the array as it is
newArr2.pop(); // Removes the last element of the array
console.log(newArr2); // This will print the array after removing the last element
console.log(myArray2); // This will print the original array as it is but when we pop the newArr2 it will also remove the last element
//  from myArray2 as both are pointing to the same array in memory   


console.log("\n\n\n");
console.log(myArray2);
Add_array_elements(myArray2, 9); // This will add 9 to the end of the array
Add_array_elements(myArray2, 10); // This will add 10 to the end of the array
Add_array_elements(myArray2, 11); // This will add 11 to the end of the array
Add_array_elements(myArray2, 12); // This will add 12 to the end of the array
Add_array_elements(myArray2, 13); // This will add 13 to the end of the array
Add_array_elements(myArray2, 14); // This will add 14 to the end of the array
Add_array_elements(myArray2, 15); // This will add 15 to the end of the array
Add_array_elements(myArray2, 16); // This will add 16 to the end of the array
Add_array_elements(myArray2, 17); // This will add 17 to the end of the array
console.log(myArray2);



const myArray3 = myArray2.slice(0,3); // This will create a new array and copy the elements of myArray2 to it
console.log(myArray3);
const USingsplice = myArray2.splice(0,3); // This will remove the first 3 elements of myArray2 and return them as a new array
console.log("\n\n",USingsplice);
console.log("\n\n 6,9,10 is removed from the og Array \n",myArray2); // This will print the original array after removing the first 3 elements


// +******** To combine two arrays ********
const marvelHeroes = ["Iron Man", "Captain America", "Thor"];
const dcHeroes = ["Batman", "Superman", "Wonder Woman"];
let combinedArray = marvelHeroes.push(dcHeroes); // This will add the elements of dcHeroes to the end of marvelHeroes but 
// it will add the entire dcHeroes array as a single element to marvelHeroes
marvelHeroes.pop(); // This will remove the last element of marvelHeroes which is the entire dcHeroes array
console.log(marvelHeroes); // This will print the combined array
// To combine two arrays we can use the concat() method
const combinedHeroes = marvelHeroes.concat(dcHeroes);
console.log(combinedHeroes); // This will print the combined array

// by using the spread operator we can combine two arrays (This is the most preferred way to combine two arrays)

const combinedHeroes2 = [...marvelHeroes, ...dcHeroes];
console.log("\n\n\n",combinedHeroes2); // This will print the combined array


// if  there is an array inside an array then we can use the flat() method to flatten the array
const nestedArray = [1, 2, [3, 4], [5, 6]];
const flattenedArray = nestedArray.flat();
console.log("\n\n\n",flattenedArray); // This will print the flattened array [1, 2, 3, 4, 5, 6]

// learning about the map() method in arrays
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2); // This will create a new array with the elements of numbers multiplied by 2
console.log("\n\n\n",doubledNumbers); // This will print the new array [2, 4, 6, 8, 10]

// learning about the filter() method in arrays
const evenNumbers = numbers.filter((num) => num % 2 === 0); // This will create a new array with the even elements of numbers
console.log("\n\n\n",evenNumbers); // This will print the new array [2, 4]

// learning about from() method in arrays
const str = "Hello";
const charArray = Array.from(str);
console.log("\n\n\n",charArray); // This will print the array of characters ['H', 'e', 'l', 'l', 'o']
console.log(Array.from({name: "John", age: 30, city: "New York"})); // this will give an emiy array as the object is not iterable intrusting...

// forming array using Of()
let score1 = 200;
let score2 = 300;
let score3 = 400;
const scores = Array.of(score1, score2, score3);
console.log("\n\n\n",scores); // This will print the array [200, 300, 400]



// ************ Objects in JavaScript ************

