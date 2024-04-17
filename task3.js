/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/ 
let marks = 50;
if( marks >= 90 && marks<= 100 ){
    console.log("you have gotten A");
}
else if( marks >= 80 && marks < 90 ){
    console.log("you have gotten B")
}
else if( marks >= 70 &&  marks < 80 ){
    console.log("you have gotten C")

}

else if(  marks >= 60 &&  marks < 70 ){
    console.log("you have gotten D")
}


else{
    console.log("you have failed")
}