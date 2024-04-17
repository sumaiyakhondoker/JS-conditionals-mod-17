const age = 45;
const price = 500;
if(age <= 12){
    console.log("You can eat for free!!");
}
else if(age >= 60){
    // 50% discount
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log("pay : " + payAmount);

}
else if(age >= 50){
    // 25% discount
    const discount = price * 25 / 100;
    const payAmount= price - discount;
    console.log("pay : " + payAmount);

}
else if(age >= 40){
    // 10% discount
    const discount = price * 10/100;
    const payAmount = price - discount;
    console.log("pay :" + payAmount);


}
else{
    console.log("pay : " + price);
}