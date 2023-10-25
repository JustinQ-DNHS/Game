---
layout: post
title: Rock Paper Scissors
toc: true
comments: false
type: tangibles
courses: { compsci: {week: 3} }
---

 
 
  <!--Buttons-->
  <p>
      <button onclick="choice = possibleChoices[0]; computerChoice()">Rock</button>
      <button onclick="choice = possibleChoices[1]; computerChoice()">Paper</button>
      <button onclick="choice = possibleChoices[2]; computerChoice()">Scissors</button>
  </p>

  <script>
    //Creates an array of possible choices
    let possibleChoices = ["Rock", "Paper", "Scissors"];
      
    //Define Choice with no value
    let choice = ""

    //Function that makes computer choose its play and then output the result
    function computerChoice() {
      //Defines Result variable
      let result = "";

      //Define Computer Move Variable
      let computerMove ="";
      
       //Pick a Number 1-3 (Creates Randomization for Game)
      let random = Math.floor(Math.random()*3 + 1);

        //Translates Numbers into actual Moves
        if (random === 1) {
          computerMove = possibleChoices[0]
        } else if (random === 2) {
          computerMove = possibleChoices[1]
        } else {
          computerMove = possibleChoices[2]
        }

        //Outputs the result (Win, Loss, Tie)
        if (computerMove === choice) {
          console.log("You Tied");
          result = "Tied";
        } else if (computerMove === "Rock" && choice === "Scissors" || computerMove === "Paper" && choice === "Rock" || computerMove === "Scissors" && choice === "Paper") {
          console.log("You Lose");
          result = "Lose";
        } else {
          console.log("You Win");
          result = "Win";
        }

        alert(`You chose: ${choice}. The computer chose: ${computerMove}. You ${result}`)
      }
  </script>