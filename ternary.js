// program 1
const age = 29;
// normal if-else
// if(age >= 18){
//     console.log("you can vote");

// }
// else{
//     console.log("you can't vote")
// }


// simple ternary
// age >= 18 ? console.log("you can vote") : console.log("you can't vote");





// program 2

//--------IF ELSE-----------
// let price = 500;
// const isLeader = false;
// if(isLeader === true){
//     price = 0;
// }

// else{
//     price = price + 100;
// }
// console.log(price)


// --------TERNARY-----------
// price = isLeader === true ? 0 : price + 100; 
// console.log(price);

// PROGRAM 3
// ------IF ELSE -----
// let price = 2900;
// const isLeader = false;
// if(isLeader === true){
//     if(price > 1000){
//         price = price / 2;
//     }
//     else{
//         price = 0;

//     }
// }
// else{
//     price = price + 1000;
// }

// console.log(price)

//  ------TERNARY -------
// variableName = condition ? true : false;
// console.log(variableName);

// ------TERNARY ----
// price = isLeader === true ? price > 1000 ? price/2 : 0 : price + 100;
// console.log(price)

// practice
let price = 20000;
const isLeader = true;
// if(isLeader === true){
//     if(price > 1000){
//         price = price / 2;

//     }
//     else{
//         price = 0;
//     }
// }

// else{
//     price = price + 100;
// }
// console.log(price)

price = isLeader === true ? price > 1000 ? price / 2 : 0  : price + 100;
console.log(price);



































