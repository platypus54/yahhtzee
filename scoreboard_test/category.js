class Category {

  constructor() {
    this._isSelected = false;
    this._score = 0;
  }

  get isSelected(){
    return this._isSelected;
  }

  set isSelected(selected){
    this._isSelected = selected;
  }

  get score(){
    return this._score;
  }

  set score(value){
    this._score = value;
  }
}

class Categories {

    #upperFields = [
    "ones", 
    "twos", 
    "threes", 
    "fours", 
    "fives", 
    "sixes"]

    #lowerFields = [
    "three of a kind", 
    "four of a kind", 
    "full house",
    "small straight", 
    "large straight", 
    "yahtzee", 
    "chance"
    ];

  constructor() {
    this.upperCategories = new Map();
    this.lowerCategories = new Map();

    this.#upperFields.forEach(category => {
      this.upperCategories.set(category, new Category());
    });

    this.#lowerFields.forEach(category => {
      this.lowerCategories.set(category, new Category());
    });
  }

  areUpperCategoriesComplete(){
      for (const [key, value] of this.upperCategories) {
        // check to see if a category is not selected
          if(!value.isSelected)
              return false;
      }
      // all items have been selected
      return true;
  }

  areLowerCategoriesComplete(){
    for (const [key, value] of this.lowerCategories) {
      // check to see if a category is not selected
        if(!value.isSelected)
            return false;
    }
    // all items have been selected
    return true;
  }

}

