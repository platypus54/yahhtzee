
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
    //let diceFields = document.querySelectorAll("dice");

    this.dice.forEach((die,key) => {
      die.roll();
      document.getElementById(key).innerHTML = die.getValue();
    });
  }

   addDiceHoldEvents(){
    let diceFields = document.querySelectorAll(".dice");
    let dice = this.dice;

    diceFields.forEach((field, index) => {
        console.log(field, index)
        
        field.addEventListener("click", function()
        {
          document.getElementById(`${field.id}`).addEventListener("click",function(){ 
            
            
            if(dice.get(val.id))
              {
                dice.
                this.style.backgroundColor = "white"
              }
              else
              {
                dice.setHold(true);
                this.style.backgroundColor = "lightyellow"
              }
          })
        })
    });
  }




}
