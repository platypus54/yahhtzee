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
    score.sort(diceList.yahtzeeDice);
    score.count();

    score.displaySort();
    score.displayCount();
    score.calculateUpperScore();
    console.log("----- lower -----");
    score.calculateLowerScore();

    score.reset();

    game_rolls += 1

  }
  

}
