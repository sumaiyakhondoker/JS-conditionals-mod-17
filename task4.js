/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

const myScore = 70;
const frndScore = 100;

if(myScore > 80){
    if(frndScore > 80){
        console.log("Friend , let's go for lunch.")
    }
    else if(frndScore < 80 && frndScore >= 60 ){
        console.log("Good Luck, next time.")
    }
    else if(frndScore < 60 && frndScore >= 40){
        console.log("I'll not see  my friend's message.")
    }
    else{
        console.log("Block friend.")
    }


}

else{
    console.log("go to home and sleep and act sad.")
}
