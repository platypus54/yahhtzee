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


/**
 *  Listens for player to select a category when roll is not 0.
 *  This one is for the upper categories. Once things are more
 *  smoothed out, will try to turn this into a function to reduce
 *  code.
 */
score.categories.upperCategories.forEach((element, key,map) =>{
  
  let upperField = document.getElementById(key);
  
  upperField.addEventListener("click",function(){
    
    let category = map.get(key);
    
    if(!category.isSelected && d.rolls != 0){
      
      category.isSelected = true;
      
      category.score = this.innerText;
      
      this.style.backgroundColor = "lightblue";
      
      d.rolls = 0;
      
      rollCounterField.innerHTML = `Rolls: ${d.rolls}`;

      d.resetHolds();

      if( score.categories.areUpperCategoriesComplete())
        return alert('all fields are chosen')
    }
  })    
 })

/**
 *  Listens for player to select a category when roll is not 0.
 *  This one is for the lower categories. Likewise as above, so 
 *  this one too. 
 */
 score.categories.lowerCategories.forEach((element, key,map) =>{
  let lowerField = document.getElementById(key);
  lowerField.addEventListener("click",function(){
    let category = map.get(key);
    if(!category.isSelected && d.rolls != 0){
      category.isSelected = true;
      category.score = this.innerText;
      this.style.backgroundColor = "lightblue";
      d.rolls = 0;
      rollCounterField.innerHTML = `Rolls: ${d.rolls}`;
      d.resetHolds();
      if( score.categories.areLowerCategoriesComplete())
        return alert('all fields are chosen')
    }
  })    
 })


