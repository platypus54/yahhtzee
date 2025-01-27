
// Structure to store Dice information used in Yahtzee
class Dice {
  constructor() {
    this.diceValue = 0;
    this.isDiceHeld = false;
  }

  getValue (){
    return this.diceValue;
  }

  setValue(diceValue){
    this.diceValue = diceValue;
  }

  setHold(isHeld){
    this.isDiceHeld = isHeld;
  }

  getHold(){
    return this.isDiceHeld
  }
  
   // Rolls dice generating a number [1,6]
  roll(){
    if (this.isDiceHeld == false)
      this.diceValue = Math.floor(Math.random() * (7 - 1) ) + 1;
  }

  checkHold(){
    return this.getHold();
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
    for (var i = 0; i < 5; i++) {
      this.yahtzeeDice[i].roll();
    }
    
  }



}
