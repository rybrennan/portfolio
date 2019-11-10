//do less is a key part of making applications that are readable, maintainable and efficient

// Promises unlike callbacks are composable
//promise has a method on it called 'then'
//we are passing then a callback function

//do we understand a Promise conceptually...

// Let’s talk about what happens when you tell node, or V8, to run a file.

//What do we expect- each expression run s and the moves to the next one
//when we invoke on line 50, we expect information that has been established on line 40

//stuff that might take hundreds of milliseconds. Like talking to a database, or reading a file.

//JavaScript is a single-threaded language, which means that it can only do one thing at a time.
//executes unidirectionally:

// let ourStuff = fs.readFile('veryimportant.txt');
// console.log(ourStuff)

//That fs.ReadFile will run, and head right off of our callstack, freeing us to run the console.log statement on line twenty. Great, right?

//when an async function takes a callback, that argument will run upon the completion of the asunc action, right?

//We don’t know how long any given async action will take to complete.

//order of events
//1: async function runs
//2: callback gets pushed onto the TASK QUEUE (but it does not run there)
///!!!!!!!!!
//vanilla async actions/callbacks/operations TAKE TWO FUNCTIONS AS ARGUMENTS-
//one for sucess one for error as in, the first function parameter will be treated as the error case callback

//PROMISE
//a promise is the eventual result of an async operation.
//THEN- registers the callback to RECEIVE a promise's eventual value or the reason it cannot be fufilled
// think of a promise as a container for an asynchronous action

//PROMISES ARE JUST BASIC JAVASCRIPT- ES6
//you can instantiate a new promise any time you like.
//promises are just a constructor with a bunch of methods and properties

//A promise takes in an EXECUTOR FUNCTION (resolve, reject- The THING THAT ACTUALLY NEEDS TO GET DONE- it's a function and we need to control it's results asynchronously
//A PROMISE HAS INTERNAL STATE- which we cannot access directly- it starts out w/ a state of 'PENDING'
//and that state can only change once in its lifespan- it either gets FUFILLED- yay! or REJECTED BOOO
//!!!!!!!!!!!
//The promise constructor takes one argument, a callback with two parameters, resolve and reject.
///!!!!!!!!!

//A promise has a value- this is the data we want or the error we get back

//UNCOMMENT
// const myCar = {
//     color: 'blue',
//     type: 'sedan',
//     doors: '4',
//  };
//You could also create a class and instantiate it with the new keyword.

//  class Car {
//     constructor(color, type, doors) {
//        this.color = color;
//        this.type = type;
//        this.doors = doors
//     }
//  }
//  const myCar = new Car('blue', 'sedan', '4');
//  console.log(myCar);

// //instead of the 3 parameters we passed in to make our car (color, type, and doors)
// // we pass in a function that takes two arguments: resolve and reject.

// const myPromise = new Promise(function(resolve, reject){
//     resolve(10)
// });

// console.log('this is my promise', myPromise)

//In addition, we can pass anything we’d like to into resolve and reject.
// For example, we could pass an object instead of a string:

let a = 'Ryan'
const myPromise = new Promise((resolve, reject) => {
    if (Math.random() * 100 <= 90) {
        resolve();
    }
    reject(new Error('In 10% of the cases, I fail. Miserably.'));
});





myPromise.then((data) => {

})


///The resolve and reject are functions themselves and are used to send back
//values to the promise object.
