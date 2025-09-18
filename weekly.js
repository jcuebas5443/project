const prompt = require('prompt-sync')();

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

function maxScore(){
    let score= 0;
    console.log(`let it begin`)
    let questions=[
        [3,"+",5],
        [3,"-",5],
        [8,"*",7],
        [3,"+",5],
        [3,"-",1],
        [2,"*",9],
        [3,"+",5],
        [10,"-",5],
        [7,"*",5],
        [3,"+",5],
        [3,"-",50],
        [3,"*",5],
        [30,"+",5],
        [3,"-",5],
        [3,"*",10],
        [6,"+",5],
        [7,"-",7],
        [35,"+",2],
        [5,"-",9],
        [3,"+",7],
        [9,"*",5],
    ];
    for (let[num1,operator,num2] of questions){
        score +=problem(num1,operator,num2)
    }
    console.log(`the game is over your score is ${score}`)

}


function threeAndOut(){
let lives=3;
let score=0;
console.log(`welcome to three and out`)
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

console.log(`game over you score is ${score}`)
}
function mainMenu(){
    console.log(`please select a game mode`)
    console.log(`1)max score`)
    console.log(`2) three and out `)
    
  while(true){
    let choice = prompt(`enter 1 or 2 :`)
    if (choice==="1"){
        maxScore();
    }else if (choice==="2"){
        threeAndOut();
    }
    else{
        console.log(`invalid option `)
    }
  }

}
mainMenu();


