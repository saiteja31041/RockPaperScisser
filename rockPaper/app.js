let userScore = 0;
let comptScore = 0;
const userScorePara = document.querySelector("#suser");
const comptScorePara = document.querySelector("#scomt");
let choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const drawGame =()=>{
    console.log("game was draw.");
    msg.innerText = "game was draw.!,play again";
    msg.style.backgroundColor = "black";

}
const showWinner=(userWin,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText = "you win!"
        msg.style.backgroundColor = "green";
       
    }
    else{
        comptScore++;
        comptScorePara.innerText = comptScore;
        console.log("you lose");
        msg.innerText = "you lose!"
        msg.style.backgroundColor = "red";

    }
}
const playgame=(userChoice)=>{
    console.log("user chose=",userChoice);
    const compChoice = getComptChoice();
    console.log("computer chose=",compChoice);

    if(userChoice == compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice =="rock"){
          userWin=  compChoice =="paper"?false:true;
        }
        else if(userChoice =="paper"){
            userWin = compChoice =="rock"?true:false;
        }
        else if(userChoice =="scissors"){
            userWin = compChoice =="paper"?true:false
        }

        showWinner(userWin,compChoice);
    }
}

choice.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    })
})


const getComptChoice=()=>{
    const options = ['rock','paper','scissors']
    const index = Math.floor(Math.random()*options.length);
    return options[index];
}




