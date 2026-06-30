<<<<<<< HEAD
//  1 For of loop mainly works on map objects and provide us keys.
// For Example:
const map = new Map()
map.set("IN" , "India")
map.set("FR","France")
map.set("GR","Germany")
map.set("USA","United States Of America")

console.log(map.keys())

for (const keys of map) {
    console.log(keys)
}

// if i want both values and keys : 
console.log("\n");
for (const [keys,values] of map) {
    
    
    console.log(keys ,':-', values)
}

// for objects iteration we need for in loop which also works in arrays:

console.log("\n");


const myobject = {
    name : "Ronak",
    Standard : "Ty bsc cs",
    Rank : "First Raker"
}
for (const key in myobject) {
    console.log(key);
    
}
// To print the values of the object :
console.log("\n");
for (const key in myobject) {
   console.log(myobject[key]); 
}

console.log("\n printing both key and value of the object using for of loop: \n");

for (const key in myobject) {
console.log(`the key is ${key} and the value of the key is ${myobject[key]}`);
}


// learning .forEach() and works mainly or we can say it is used mainly in arrays to untangle .json file :
// it takes array as an ip and runs a function iterating in the array automatically one by one and uses a key to do that
console.log("\n******************************************************************\nthis is there i start learning forEach () function : \n");

const myArray = ["JS","Java","React","Ruby","Python","C"]

myArray.forEach((items) => {
    console.log(items)
})

// now for a object inside an array:
console.log("\n ************************************************************\n this is noe forEach() fpr object within an array: \n");
const mycoading = [{languagename : "Javascript" , languageFilename : "js"},
                   {languagename : "React" , languageFilename : "rjs"},
                   {languagename : "C++" , languageFilename : "CPP"},
                   {languagename : "Python" , languageFilename : "py"}]

mycoading.forEach( (value) => {
console.log(value)

})
console.log("\n Language name : \n");

mycoading.forEach( (value) => {
    console.log(value.languagename)
})


// now lets learn filter finction ************


const array = [1,2,3,4,5,6,7,8,9,10]


console.log("\n now learning filter function\n *****************************************************************************")
const new_arr = array.filter( (num) => num>5);
console.log(new_arr);
// forEach doesn't give us any return it is just one time executable function whereas the filter function provide us a retun but we need to store 
// the return in an variable.


=======
//  1 For of loop mainly works on map objects and provide us keys.
// For Example:
const map = new Map()
map.set("IN" , "India")
map.set("FR","France")
map.set("GR","Germany")
map.set("USA","United States Of America")

console.log(map.keys())

for (const keys of map) {
    console.log(keys)
}

// if i want both values and keys : 
console.log("\n");
for (const [keys,values] of map) {
    
    
    console.log(keys ,':-', values)
}

// for objects iteration we need for in loop which also works in arrays:

console.log("\n");


const myobject = {
    name : "Ronak",
    Standard : "Ty bsc cs",
    Rank : "First Raker"
}
for (const key in myobject) {
    console.log(key);
    
}
// To print the values of the object :
console.log("\n");
for (const key in myobject) {
   console.log(myobject[key]); 
}

console.log("\n printing both key and value of the object using for of loop: \n");

for (const key in myobject) {
console.log(`the key is ${key} and the value of the key is ${myobject[key]}`);
}


// learning .forEach() and works mainly or we can say it is used mainly in arrays to untangle .json file :
// it takes array as an ip and runs a function iterating in the array automatically one by one and uses a key to do that
console.log("\n******************************************************************\nthis is there i start learning forEach () function : \n");

const myArray = ["JS","Java","React","Ruby","Python","C"]

myArray.forEach((items) => {
    console.log(items)
})

// now for a object inside an array:
console.log("\n ************************************************************\n this is noe forEach() fpr object within an array: \n");
const mycoading = [{languagename : "Javascript" , languageFilename : "js"},
                   {languagename : "React" , languageFilename : "rjs"},
                   {languagename : "C++" , languageFilename : "CPP"},
                   {languagename : "Python" , languageFilename : "py"}]

mycoading.forEach( (value) => {
console.log(value)

})
console.log("\n Language name : \n");

mycoading.forEach( (value) => {
    console.log(value.languagename)
})


// now lets learn filter finction ************


const array = [1,2,3,4,5,6,7,8,9,10]


console.log("\n now learning filter function\n *****************************************************************************")
const new_arr = array.filter( (num) => num>5);
console.log(new_arr);
// forEach doesn't give us any return it is just one time executable function whereas the filter function provide us a retun but we need to store 
// the return in an variable.


>>>>>>> 4f30ffd677b155c394bfb4e4589dc36f39960253
