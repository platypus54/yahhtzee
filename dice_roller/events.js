let button_roll = document.querySelector('button');
let dice = new DiceCollection();
let rolls = 0;

dice.addDiceHoldEvents();

button_roll.addEventListener("click",function(){
  if(rolls < 3){
    dice.roll();
    rolls++;
  }
  else
    alert(`rolls reached: ${rolls}` )
})

