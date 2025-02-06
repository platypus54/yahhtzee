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

/**
 *  Applies a color filter to dice that have been selected to be
 *  held. When the dice is held the color is light-yellow versus white 
 *  when it is not. 
 */

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
 */
score.categories.upperCategories.forEach((element,key,map) =>{
  
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
         alert('all fields are chosen')
    }
  })    
 })

/**
 *  Listens for player to select a lower category when roll is not 0.
 */
 score.categories.lowerCategories.forEach((element, key,map) =>{
  let lowerField = document.getElementById(key);
  
  lowerField.addEventListener("click",function(){
    
    let category = map.get(key);
    
    // select a category that is not already chosen
    if(!category.isSelected && d.rolls != 0){
      
      // reflect that the category is selected
      category.isSelected = true;
      
      // store the category score
      category.score = this.innerText;
      
      // update the selected category cell background
      this.style.backgroundColor = "lightblue";
      
      // reset rolls and update roll field value
      d.rolls = 0;
      rollCounterField.innerHTML = `Rolls: ${d.rolls}`;
      
      // remove previous holds on dice
      d.resetHolds();

      // check if all scores have been chosen
      // will most likely move, but fine for now. 
      if( score.categories.areLowerCategoriesComplete())
         alert('all fields are chosen')
    
    }
  })    
 })


