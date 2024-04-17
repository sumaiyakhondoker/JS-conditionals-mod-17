/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 500;
let ticketPrice = 800;
if(age < 10){
    console.log("You can travel for free!!");
}

//student (discount 50%)
else if( age >= 10 && age <= 25){
    discount = ticketPrice * 50 / 100;
    // after discount
    ticketPrice = ticketPrice - discount;
    console.log("Ticket Price = " + ticketPrice);


}

else if(age > 25 && age < 60){
    console.log("Ticket Price = "+ ticketPrice)
    
}
else{
    // 15% discount
    discount = ticketPrice * 15 / 100;
    // after discount
    ticketPrice = ticketPrice - discount;
    console.log("Ticket Price = " + ticketPrice);
}