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
  score = new Scoring
  game_rolls = 0;
  game_turns = 0;


  while (game_rolls < 3)
  {
    
    console.log("ROLL:\t" + game_rolls)
    diceList.roll()
    
    score.copy(diceList.yahtzeeDice)

    score.count();

    score.calculateUpperScore();
    score.calculateLowerScore();

    score.reset();

    game_rolls += 1

  }
  

}
