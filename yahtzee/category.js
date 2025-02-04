

class Categories {

  #yahtzeeCategories = [
    "ones", 
    "twos", 
    "threes", 
    "fours", 
    "fives", 
    "sixes",
    "upper-bonus",
    "upper-total",
    "three-kind-score", 
    "four-kind-score", 
    "full-house-score",
    "small-straight-score", 
    "large-straight-score", 
    "yahtzee-score", 
    "chance-score",
    "bonus-yahtzee",
    "lower-total"
    ];

  constructor() {
    this.categoriesMap = new Map();

    this.#yahtzeeCategories.forEach(category => {
      this.categoriesMap.set(category, new Category());
    });
  }

}

class Category {

  constructor() {
    this.isSelected = false;
    this.score = 0;
  }

  get isSelected(){
    return this.isSelected;
  }

  set isSelected(selected){
    this._isSelected = selected;
  }

  get score(){
    return this.score;
  }

  set score(value){
    this._score = value;
  }
}

