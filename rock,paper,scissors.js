const getUserInput = userInput =>{
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper'){
    return userInput;
  }else{
    console.log('error!! please type rock,scissors or paper' );
  }
};
// thiss line dictates the computer input
const getComputerInput = () =>{
  let randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber){
    case 1:
     return "paper";
    case 2:
     return "rock";
    case 0:
     return "scissors";
    }
  };
  // this line is to determine the winner
   function determineWinner(userChoice, computerChoice){
    if(userChoice === computerChoice){
      return 'The game was tie!';
    }
    if(userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        return 'Sorry, you lost!';
      }else{
        return 'congratulations! you won';
      }
    }
    if(userChoice === 'rock'){
      if(computerChoice ==='paper'){
        return 'oops you lost...try again';
      }else{
        return 'congratulations! you won';
      }
    }
    if(userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        return 'sorry! you lost the game';
      }else{
        return 'congratulations! on your winning';
      }
    }
   };
   // playgame scetion
   function playGame(){
   const userChoice = getUserInput('scissors');
   const computerChoice = getComputerInput();
   return determineWinner(userChoice, computerChoice);
   };
   playGame()
   console.log(playGame());
   