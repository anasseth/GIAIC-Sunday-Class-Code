// Hoisting & Temporal Dead Zone
// https://www.freecodecamp.org/news/javascript-temporal-dead-zone-and-hoisting-explained/
// Recursive Function
// function recursiveFunc(count: number) {
//     if (count >= 0) {
//         console.log("CountDown : ", count);
//         recursiveFunc(count - 1);
//     }
// }
// recursiveFunc(5);
// Array     // Index 0, 1, 2, 3, 4, 5, 6,  7,  8,  9,
// let sampleArray = [1, 2, 3, 4, 5, 6, 45, 46, 67, 98, 1, 5, 90];
// console.log(sampleArray.length);
// sampleArray[0];
// sampleArray[9] = 108;
// Array Method
var legend = ["Ahmed", "Awais", "Hamza"];
console.log("\n Push");
console.log("Before Push :", legend);
legend.push("Hina");
console.log("After Push :", legend);
console.log("\n Unshift");
console.log("Before Unshift :", legend);
legend.unshift("Anas");
console.log("After Unshift :", legend);
console.log("\n Pop");
console.log("Before Pop :", legend);
legend.pop();
console.log("After Pop :", legend);
console.log("\n Shift");
console.log("Before Shift :", legend);
legend.shift();
console.log("After Shift :", legend);
