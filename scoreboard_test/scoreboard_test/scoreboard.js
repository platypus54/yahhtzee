class ScoreBoard {
  
constructor() {
  this.score = new Scoring();
  this.categories = new Categories();

  this.upperScore = Array(8).fill(0);
  this.lowerScore = Array(8).fill(0);

}

calculateUpperScore(){
  
  this.score.countedDice.forEach((element,index) => {
    this.upperScore[index] = (index + 1) * element;
  });
  
  let index = 0;
  this.categories.upperCategories.forEach((element, key) => {
    if(!element.isSelected)
    {
      document.getElementById(key).innerHTML = this.upperScore[index++];
    }

  });





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