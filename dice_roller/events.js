let button_roll = document.getElementById('roll-dice');
let dice = new DiceCollection();
let rolls = 0;

button_roll.addEventListener("click",function(){
  if(rolls < 3){
    dice.roll();
    rolls++;
  }
  else
    alert(`rolls reached: ${rolls}` )
})

