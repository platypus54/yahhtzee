class ScoreBoard {
  
constructor() {
  this.score = new Scoring;
  this.categories = new Categories;

  this.upperScore = Array(8).fill(0);
  this.lowerScore = Array(8).fill(0);

}


calculateUpperScore(){
  let outcomes = 0;
  
  for (; outcomes < this.score.countedDice.length; outcomes++) {
    this.upperScore[outcomes] = (outcomes + 1) * this.score.countedDice[outcomes]; 
  }



  document.getElementById("ones").innerHTML = this.upperScore[0];
  document.getElementById("twos").innerHTML = this.upperScore[1];
  document.getElementById("threes").innerHTML = this.upperScore[2];
  document.getElementById("fours").innerHTML = this.upperScore[3];
  document.getElementById("fives").innerHTML = this.upperScore[4];
  document.getElementById("sixes").innerHTML = this.upperScore[5];

}

calculateLowerScore(){
  let temp = [];
  temp[0] = this.score.threeOfAKind();
  temp[1] = this.score.fourOfAKind();
  temp[2] = this.score.fullHouse(); 
  temp[3] = this.score.smallStraight();
  temp[4] = this.score.largeStraight();
  temp[5] = this.score.yahtzee();
  temp[6] = this.score.chance();
  
  document.getElementById("three-kind-score").innerHTML = temp[0];
  document.getElementById("four-kind-score").innerHTML = temp[1];
  document.getElementById("full-house-score").innerHTML = temp[2];
  document.getElementById("small-straight-score").innerHTML = temp[3];
  document.getElementById("large-straight-score").innerHTML = temp[4];
  document.getElementById("yahtzee-score").innerHTML = temp[5];
  document.getElementById("chance-score").innerHTML = temp[6];

}

calculateScores() {
  this.calculateUpperScore();
  this.calculateLowerScore();
}


printScoreBoard(){}

}

