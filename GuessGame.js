const max= prompt("Enter maximum range");
const r= Math.floor(Math.random() *max)+1;
let p= prompt("Guess the number");
while(p!=r){
    if (Math.abs(r-p)>=1 && Math.abs(r-p)<=3 && p>r){
    console.log ("High");
    alert("High");
    }
    else if (Math.abs(r-p)>3 && p>r){
    console.log ("Too High");
    alert("Too High");
    }
    else if (Math.abs(r-p)>=1 && Math.abs(r-p)<=3 && p<r){
    console.log ("Low");
    alert("Low");
    }
    else if (Math.abs(r-p)>3 && p<r){
    console.log ("Too Low");
    alert("Too Low");
    }
    p= prompt('Guess the number');
    if (p=='quit' || p=='QUIT' || p=='Quit'){
        alert("User Quitted");
        console.log("User Quitted");
        break
    }
    if(p==r){
        console.log("Congratulations, You won the Game");
        console.log("Correct Number: "+p);
        alert("Congratulations, You won the Game");
        alert("Correct Number :"+p);
        break;
    }
    else
    continue;
}
