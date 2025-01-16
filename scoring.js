MAX_OUTCOMES = 6;
MAX_DICE = 5;

class Scoring{

  constructor() {
    this.sortedDice = [];
    this.countedDice = [];

    for (var i = 0; i < 5; i++) {
      this.sortedDice[i] = 0;
    }

    for (var i = 0; i < 6; i++) {
      this.countedDice[i] = 0;
    }

  } 

  copy(list){
    for (let dice = 0; dice < list.length; dice++) {
      this.sortedDice[dice] = list[dice].get_value();
    }
  }

  sort(list){
    this.sortedDice.sort()
  }



  count(){

    this.sort()
    let total = 0;

    for (let outcomes = 0; outcomes < this.sortedDice.length; outcomes++) {
        let dice_value = this.sortedDice[outcomes];
        'decrease by 1 to fit range'
        this.countedDice[dice_value - 1] += 1
    }
  }

  sumCountedDice(){
    let sum = 0;
    for (let outcomes = 0; outcomes < this.countedDice.length; outcomes++) {
      sum += (outcomes + 1) * this.countedDice[outcomes];
    
      console.log( sum )
      return sum;
    }
  }




  calculateUpperScore(){
    for (let outcomes = 0; outcomes < this.countedDice.length; outcomes++) {
      console.log( (outcomes + 1) * this.countedDice[outcomes] )
  }
  }


  calculateLowerScore(){
        console.log(this.threeOfAKind());
        console.log(this.fourOfAKind());
        console.log(this.fullHouse());
  }




  threeOfAKind(){
    
    if(this.find(3) == null)
      return 0; 
    else
      return sumCountedDice();
  }

  fourOfAKind(){
    if(this.find(4) == null)
      return 0; 
    else
      return sumCountedDice();
  }

  fullHouse(){
    if(this.find(3) == null && this.find(2) == null)
      return 0; 
    else
      return 25;
  }


  

  displayCount(){
    for (let i = 0; i < this.countedDice.length; i++) {
      console.log(i + '\t' + this.countedDice[i] +'\t')      
    }
  }

  displaySort(){
    for (let i = 0; i < this.sortedDice.length; i++) {
      console.log(i + '\t' + this.sortedDice[i] +'\t')      
  }
}

  find(key){
    for (let i = 0; i < this.countedDice.length; i++) {
        if(this.countedDice[i] == key)
          return i;
        else
          return null;
    }

  }

  reset(){
    for (let i = 0; i < this.countedDice.length; i++)
      this.countedDice[i] = 0;
  }
}
