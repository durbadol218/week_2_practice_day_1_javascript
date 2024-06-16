var result = 80;

if(result>=0 && result<33){
    console.log("You Failed!");
}
else if(result>=33 && result<40){
    console.log("You got D");
}
else if(result>=40 && result<50){
    console.log("You got C");
}
else if(result>=50 && result<60){
    console.log("You got B");
}
else if(result>=60 && result<70){
    console.log("You got A-");
}
else if(result>=70 && result<80){
    console.log("You got A");
}
else if(result>=80 && result<=100){
    console.log("You got A+");
}
else{
    console.log("Invalid number!");
}