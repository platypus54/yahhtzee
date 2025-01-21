const upperCategories = ["Ones", "Twos", "Threes", "Fours", "Fives", "Sixes"];

const lowerCategories = [
    "Three of a Kind", "Four of a Kind", "Full House",
    "Small Straight", "Large Straight", "Yahtzee", "Chance"
];

const upperSection = document.getElementById("upper-section");
const lowerSection = document.getElementById("lower-section");
const upperTotalEl = document.getElementById("upper-total");
const upperBonusEl = document.getElementById("upper-bonus");
const lowerTotalEl = document.getElementById("lower-total");
const grandTotalEl = document.getElementById("grand-total");

const diceContainer = document.getElementById("dice-container");


class ScoreBoard {
  constructor() {
    this.score = new Scoring;
    this.upperScore = [];
    this.total_upper = 0;
    this.bonus_uppper = 0;

    this.lowerScore = [];
    this.total_lower = 0;
    this.bonus_lower = 0;
    this.yahtzee_bonus = 0; 

    for (var i = 0; i < 5; i++) {
      this.upperScore[i] = 0;
      this.lowerScore[i] = 0;
    }
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
