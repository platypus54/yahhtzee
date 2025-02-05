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
    }else
      index++;
  });

}

calculateLowerScore(){  
this.categories.lowerCategories.forEach((element,key)=>{
  if(!element.isSelected)
  {
    switch (key) {
      case "three of a kind":
        document.getElementById(key).innerHTML = this.score.threeOfAKind()
        break;
      case "four of a kind":
        document.getElementById(key).innerHTML = this.score.fourOfAKind();
        break;
      case "full house":
        document.getElementById(key).innerHTML = this.score.fullHouse(); 
        break;
      case "small straight":
        document.getElementById(key).innerHTML = this.score.smallStraight();
        break;
      case "large straight":
        document.getElementById(key).innerHTML = this.score.largeStraight();
        break;
      case "yahtzee":
        document.getElementById(key).innerHTML = this.score.yahtzee();
        break;
      case "chance":
        document.getElementById(key).innerHTML = this.score.chance();
        break;
      default:
        break;
    }
  }
  })

}

calculateScores() {
  this.calculateUpperScore();
  this.calculateLowerScore();
}

}