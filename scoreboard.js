class ScoreBoard {
  
constructor() {
  this.score = new Scoring();
  this.categories = new Categories();

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
  document.getElementById("three of a kind").innerHTML = this.score.threeOfAKind();
  document.getElementById("four of a kind").innerHTML = this.score.fourOfAKind();
  document.getElementById("full house").innerHTML = this.score.fullHouse(); 
  document.getElementById("small straight").innerHTML = this.score.smallStraight();
  document.getElementById("large straight").innerHTML = this.score.largeStraight();
  document.getElementById("yahtzee").innerHTML = this.score.yahtzee();
  document.getElementById("chance").innerHTML = this.score.chance();
}

calculateScores() {
  this.calculateUpperScore();
  this.calculateLowerScore();
}

}