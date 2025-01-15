 MAX_DICE = 5;

class Dice {
  constructor() {
    this.diceValue = 0;
    this.diceIsHeld = false;
  }

  get_value (){
    return this.diceValue;
  }

  set_value(dice_value){
    this.diceValue = dice_value;
  }

  set_hold(hold_dice_value){
    this.diceIsHeld = hold_dice_value;
  }

  roll(){
    if (this.diceIsHeld == false)
      this.diceValue = Math.floor(Math.random() * (7 - 1) ) + 1;
  }

}

class DiceCollection {

  constructor() {
    this.yahtzeeDice = [];
    for (var i = 0; i < 5; i++) {
      this.yahtzeeDice[i] = new Dice;
    }

  }

    roll(){
    for (var i = 0; i < MAX_DICE; i++) {
      this.yahtzeeDice[i].roll();
      'console.log(this.yahtzeeDice[i].get_value())'
    }
    
  }



}
