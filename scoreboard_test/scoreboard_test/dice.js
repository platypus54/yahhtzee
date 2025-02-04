
// Structure to store Dice information used in Yahtzee
class Die {
  constructor() {
    this.value = 0;
    this.isHeld = false;
    this.name = " ";
  }

  getValue(){
    return this.value;
  }

  setValue(val){
    this.value = val;
  }

  setHold(bool){
    this.isHeld = bool;
  }

  getHold(){
    return this.isHeld
  }
  
  roll(){
    if (!this.isHeld)
      this.value = Math.floor(Math.random() * (7 - 1) ) + 1;
  }

}

class DiceCollection {

  constructor() {
    this.dice = new Map();
    this.rolls = 0;
    
    for (let dice = 1; dice < 6; dice++) {
      let die = new Die();
      this.dice.set(`dice${dice}`,die);
    }
  }

  roll()
  {
    this.dice.forEach((die,key) => {
      die.roll();
      document.getElementById(key).innerHTML = die.getValue();
    });
  }
}
