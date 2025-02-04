let button_roll = document.querySelector('button');
let dice = new DiceCollection();

  button_roll.addEventListener("click",function(){

    if(dice.rolls < 3)
    {
      dice.rolls++;
      dice.roll();
    }
    else
    {
      alert(`rolls reached: ${dice.rolls} choose a score:` )
    }
  });


    let diceFields = document.querySelectorAll(".dice");
    diceFields.forEach((field) => 
    {
      field.addEventListener("click", function()
      {   
          if( dice.rolls != 0 && dice.rolls < 3)
          { 
            if(dice.dice.get(field.id).getHold())
            {
              dice.dice.get(field.id).setHold(false);
              field.style.backgroundColor = "white"
            }
            else
            {
              dice.dice.get(field.id).setHold(true);
              field.style.backgroundColor = "lightyellow"
            }
          }
      })
    });
