
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