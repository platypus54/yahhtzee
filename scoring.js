// logic and processes to handle yahtzee related calculations.
class Scoring{

  constructor() {
  this.sortedDice = Array(5).fill(0)
  this.countedDice = Array(6).fill(0)
  } 

  copy(list)
  {
      list.forEach((dice, index) => {
        this.sortedDice[index] = dice.getValue();
      });
  }

  sort()
  {
    this.sortedDice.sort()
  }

  // update
  count()
  {
    this.sort()

    let total = 0;

    for (let outcomes = 0; outcomes < this.sortedDice.length; outcomes++) 
      {
        let dice_value = this.sortedDice[outcomes];

        'decrease by 1 to fit range'
        this.countedDice[dice_value - 1] += 1
    }
  }

   find(key){
    this.countedDice.includes(key);
   }


  reset(){
    for (let i = 0; i < this.countedDice.length; i++)
      this.countedDice[i] = 0;
  }



  sumCountedDice()
  {
    let sum = 0;
    for (let outcomes = 0; outcomes < this.countedDice.length; outcomes++) 
    {
      sum += (outcomes + 1) * this.countedDice[outcomes];
    }
    return sum;
  }

  threeOfAKind()
  {
    if(this.find(3))
      return this.sumCountedDice(); 
    else
      return 0;
  }

  fourOfAKind()
  {
    if(this.find(4))
      return this.sumCountedDice(); 
    else
      return 0;
  }

  fullHouse()
  {
    if(this.find(3) && this.find(2))
      return 25; 
    else
      return 0;  
  }

  smallStraight() {

    let possibles = [[1,2,3,4], [2,3,4,5],[3,4,5,6]];
    let noDupes = new Set(this.sortedDice);
    let count = 0;

    for (let outcome of possibles) {
      outcome.forEach((value) => {
        if(noDupes.has(value)) 
          count++;
      })
      if(count == 4)
        return this.sumCountedDice();
    }
    return 0;
  }

  // update eventually
  largeStraight() {  
      let possibles = [[1,2,3,4,5],[2,3,4,5,6]]
      let count = 0;

      for(let i = 0; i < possibles.length && count != 5; i++){
        
        for(let j = 0; j < this.sortedDice.length; j++)
           if(possibles[i][j] == this.sortedDice[j])
            count += 1;

        if(count == 5)
          return this.sumCountedDice();
        else
          count = 0;
      }
      return 0;
  }
  yahtzee() {
    if(this.find(5))
      return 50; 
    else
      return 0;
  }

  chance() {
    return this.sumCountedDice();
  }


  displayCount(){
    for (let i = 0; i < this.countedDice.length; i++) {
      console.log('die' + (i + 1) + '\t' + this.countedDice[i] +'\t')      
    }
  }

  displaySort(){
    for (let i = 0; i < this.sortedDice.length; i++) {
      console.log('sorted_die:' + (i + 1) + '\t value of dice:' + this.sortedDice[i] +'\t')      
  }
}

}
