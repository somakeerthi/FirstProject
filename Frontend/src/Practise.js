
//     const array = [
//     {
//         name: "keerthi",
//         age: 25
//     },
//     {
//         name: "sushanth",
//         age: 27
//     }
// ];
//  array.map((array) => { //map()  method
//      console.log(array)
//  })

//   const CashInMyPocket = 100;
//   //ternary operator
//   const isCashInMyPocket =  CashInMyPocket>50 ? console.log("i have money"): console.log("i dont have money")
  
// let day =2;
// switch(day) {
//     case 1:
//         console.log("Monday");
//         break;
//      case 2:
//          console.log("tuesday");
//          break;
//     default:
//         console.log("Invalid day"); 
//         break;  
// }

// let array1 = [1,2,3,4]; // spread operator using arrays
// let array2 = [...array1,5,6,7,8];
// console.log(array2)

// function Greet(name)//functions example 1
// {
//     console.log(" hello " + name);
// }
// Greet("keerthi");

// function Square(number) { //functions example 2
//     return number * number; //this statement only return value but doesnot display output
// }
//     console.log(Square(2)); //to display output in console , we use console.log

// const numbers = [10,20,30];//function calls using spread operator
// function functionname(a,b,c) {
//     return a+b+c;
// }
// console.log(functionname(...numbers));

// let object1 = { //spread operator using objects
//     name : "keerthi"
// }
// let object2 = {
//     ...object1,
//     city: "Hyd"
// }
// console.log(object2);

// let username = "shiva";
// console.log(`hi ${username}`); // this is a template literals ` ${}`

// const x = 1920, y = 1800 //object property shorthand
// const obj1 = { x, y };//when we pass only keys,we get keys along with values as output.
// console.log(obj1);

// const a = 'apple ', b = 'mango' //object property shorthand example 2
// console.log({a,b});

// Example of Array methods(push,pop,shift & unshift,splice, slice)
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.push("kiwi"));  //push example
// console.log(fruits.pop());  //pop example
// console.log(fruits.unshift("Lemon"));  // unshift() example
// console.log(fruits.shift());   //shift() example


// let array =fruits.splice(2, 0, "Lemon", "Kiwi"); // splice example to add 2 elements
// let removed = fruits.splice(2,2); // also to remove elements we shud give like this.
// console.log(" removed items: " +  removed);
// console.log(fruits);
console.log(fruits.slice(0,2));//display output based on indexes 
console.log(fruits.slice(1));//mention no of elemnts & display output as left over items.here it doent count as indexes

console.log("hi");
setTimeout(() => console.log("there"),5000)
console.log("you");


