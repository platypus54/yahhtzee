
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
  
  // Rolls dice generating a number [1,6]
  roll(){
    if (!this.isHeld)
      this.value = Math.floor(Math.random() * (7 - 1) ) + 1;
  }

}

class DiceCollection {

  constructor() {
    this.dice = new Map();
    
    for (let dice = 1; dice < 6; dice++) {
      let die = new Die();
      this.dice.set(`dice${dice}`,die);
    
    }
  }

  roll()
  {
    let diceFields = document.querySelectorAll("dice");

     /* for (var i = 0; i < 5; i++) {
        this.yahtzeeDice[i].roll();
        document.getElementById(`dice${i + 1}`).innerHTML = this.yahtzeeDice[i].getValue();
      }*/

    this.dice.forEach((die,key) => {
      die.roll(),key;
      document.getElementById(key).innerHTML = die.getValue();
    });
  }

checkDice(){

  for (var i = 0; i < 5; i++) {
      
      let dice = this.yahtzeeDice[i]

      document.getElementById(`dice${i + 1}`).addEventListener("click",function(){
          if(dice.getHold())
          {
            dice.setHold(false);
            this.style.backgroundColor = "white"
          }
          else
          {
            dice.setHold(true);
            this.style.backgroundColor = "lightyellow"
          }

        }

      )

    }

  }




}
