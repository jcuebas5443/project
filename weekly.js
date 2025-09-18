const prompt = require('prompt-sync')();

//function for problems
function problem(num1,operator,num2){
    let answer;
    if(operator==="+"){
        answer=num1+num2
    }else if(operator==="-"){
        answer=num1-num2
    }else if(operator==="*"){
        answer=num1*num2
    }
    let user_answer = prompt(`${num1} ${operator} ${num2}(or "skip")`)
if (user_answer.toLowerCase()==="skip"){
    return 0;
}  
if (Number(user_answer)===answer){
    console.log("correct +10 points");
    return 10;
}  else{
    console.log("wrong -5")
    return -5;
    }
}
//max score game
function maxScore(){
    let score= 0;
    console.log(`let it begin`)
   

    for(let x=0;x<20;x++){
        let num1=Math.floor(Math.random()*10)+1;
        let num2=Math.floor(Math.random()*10)+1;
        let operators=["+","-","*"];
        let operator= operators[Math.floor(Math.random()*operators.length)]

        score+=problem(num1,operator,num2)
    }
 
    console.log(`the game is over your score is ${score}`)
}


//three and out game
function threeAndOut(){
let lives=3;
let score=0;
console.log(`welcome to three and out`)
console.log(prompt(`pick a mode 1)easy 2) medium 3)hard ; `))

while (lives>0){
    let num1= Math.floor(Math.random()*10)+1;
    let num2= Math.floor(Math.random()*10)+1;
    let operators=[`+`,`-`,`*`]
    let operator=operators[Math.floor(Math.random()*operators.length)];
    let answer;
    if (operator==="+"){
        answer=num1 +num2
    }else if(operator==="-"){
        answer=num1-num2
    } else if(operator==="*"){
        answer=num1*num2
    }
    let user_answer=prompt(`${num1} ${operator} ${num2}=?`)
    if (Number(user_answer) === answer){
        score+=10
        console.log(`correct+10`)
    }else{
        lives-=1
        console.log(`wrong -1 life`)

    }
    } 
    console.log(`game over your score is ${score}`)
}

//main menu function
function mainMenu(){
    console.log(`please select a game mode`)
    console.log(`1)max score`)
    console.log(`2) three and out `)
    console.log(`3)quite game`)
    
  while(true){
    let choice = prompt(`enter 1 or 2 or 3 :`)
    if (choice==="1"){
        maxScore();
    }else if (choice==="2"){
        threeAndOut();
    }
    else if (choice==="3"){
        console.log(`thanks for playing `)
        break
    }
    else{
        console.log(`invalid option `)
    }
  }

}
mainMenu();



