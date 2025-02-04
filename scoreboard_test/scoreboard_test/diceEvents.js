let button_roll = document.querySelector('.button');
let rollCounterField = document.querySelector(".rolls");
let d = new DiceCollection();
let score = new ScoreBoard();

button_roll.addEventListener("click",function(){
    if(d.rolls < 3)
    {
      d.rolls++;
      rollCounterField.innerHTML = `Rolls: ${d.rolls}`;
      d.roll();
      score.score.copy(d.dice)
      score.score.count(d);
      score.calculateScores(); 
      score.score.resetCountedDice();
    }
    else
    {
      alert(`Rolls Reached: ${d.rolls}. Make a selection! ` )
    }
  });

let dFields = document.querySelectorAll(".dice");
dFields.forEach((field) => 
{
  field.addEventListener("click", function()
  {   
      if( d.rolls != 0 && d.rolls < 3)
      { 
        if(d.dice.get(field.id).getHold())
        {
          d.dice.get(field.id).setHold(false);
          field.style.backgroundColor = "white"
        }
        else
        {
          d.dice.get(field.id).setHold(true);
          field.style.backgroundColor = "lightyellow"
        }
      }
  })
});

score.categories.upperCategories.forEach((element, key,map) =>{
  let upperField = document.getElementById(key);
  //console.log(upperField);
  upperField.addEventListener("click",function(){
    let category = map.get(key);
    if(!category.isSelected){
      category.isSelected = true;
      category.score = this.innerText;
      this.backgroundColor = 'blue';
      d.rolls = 0;
    }
    else{
    alert(`${key} has already been chosen, pick another`) 
  }
    console.log(category.isSelected, category.score);
    
  })

})
