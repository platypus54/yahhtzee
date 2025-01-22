const upperCategories = [
"Ones", 
"Twos", 
"Threes", 
"Fours", 
"Fives", 
"Sixes",
"Upper Bonus",
"Upper Total"
];

const lowerCategories = [
"Three of a Kind", 
"Four of a Kind", 
"Full House",
"Small Straight", 
"Large Straight", 
"Yahtzee", 
"Chance",
"Bonus Yahtzee",
"Total"
];

class ScoreBoard {
  
constructor() {
  this.score = new Scoring;
  this.upperScore = new Map();
  this.lowerScore = new Map();

  upperCategories.forEach(category => {
    this.upperScore.set(category, 0);
  });

  lowerCategories.forEach(category => {
    this.lowerScore.set(category, 0)
  })
}


calculateUpperScore(){
  
  this.upperScore.forEach(category => {
  })

  for (let outcomes = 0; outcomes < this.score.countedDice.length; outcomes++) {
      (outcomes + 1) * this.countedDice[outcomes]; 
  }




}

calculateLowerScore(){
  let temp = [];
  temp[0] = this.threeOfAKind;
  temp[1] = this.fourOfAKind;
  temp[2] = this.smallStraight;
  temp[3] = this.largeStraight;
  temp[4] = this.fullHouse; 
  temp[5] = this.yahtzee;
  temp[6] = this.chance;
  return temp;
}

calculateScores() {

}


printScoreBoard(){
  
  
}



}

class Category {
  constructor() {
    this.categoryName = " ";
    this.categoryIsSelected = false; 
  }

  setCategory(name, selected) {
    this.categoryName = name;
    this.categoryIsSelected = selected;
  }
}
