
const smallStraightTests = [
  [1, 2, 3, 4, 6], // Valid small straight (1-2-3-4)
  [2, 3, 4, 5, 6], // Valid small straight (2-3-4-5)
  [1, 3, 4, 5, 6], // Missing sequential number for a straight
  [1, 2, 4, 5, 6], // Missing the 3 for a small straight
  [3, 4, 5, 6, 2]  // Valid small straight (2-3-4-5)
];

const largeStraightTests = [
  [1, 2, 3, 4, 5], // Valid large straight (1-2-3-4-5)
  [2, 3, 4, 5, 6], // Valid large straight (2-3-4-5-6)
  [1, 2, 3, 5, 6], // Missing the 4 for a large straight
  [1, 3, 4, 5, 6], // Missing the 2 for a large straight
  [2, 2, 3, 4, 5]  // Duplicate numbers, not a large straight
];

main()

function main()
{
  
  diceList = new DiceCollection;
  cat = new Categories;
  
  scoreboard = new ScoreBoard;
  let game_rolls = 0;
  let game_turns = 16;
  let selections = 16;  
  roll();
}

function roll(){
  document.getElementById("roll").addEventListener("click", alert("button has been pressed"))
}



