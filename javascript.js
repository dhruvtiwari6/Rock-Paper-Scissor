let askRounds =  prompt("How many rounds you want to play? ");

 function getcomputerchoice(num) {
  if(num === 1) {
    return "paper" ;
  } else if(num === 2) {
    return "scissor" ;
  } else if(num === 3) {
    return "rock" ;
  }
}

let personcount = 0;
let computercount = 0;
let draw = 0;
 
for( let rounds = 1 ; rounds<=askRounds ; rounds++) {
  let comp = getcomputerchoice(Math.floor(Math.random() * 3) + 1);
   let choice = prompt(" tell your choice ");
       choice = choice.toLowerCase();


       if((choice != "rock") && (choice != "scissor") && (choice != "paper")) {
        alert("you wrongly entered") ;
          choice = prompt(" tell your choice again ");
          choice = choice.toLowerCase();
       }

  
       if((choice === "paper" && comp === "rock")  || (choice === "scissor" && comp === "paper") || 
       (choice === "rock" && comp === "scissor")  )  {
        personcount ++;
       }  else if ((choice === "paper" && comp === "paper")  || (choice === "scissor" && comp === "scissor") || 
       (choice === "rock" && comp === "rock") ) {
        draw++;
       } else {
        computercount++;
       }
}

console.log("computercount " + computercount);
console.log("draw " + draw);
console.log(" personcount " + personcount);

