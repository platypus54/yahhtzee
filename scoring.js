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

  sort(){
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
    }
    return sum;
  }

  calculateUpperScore(){
    for (let outcomes = 0; outcomes < this.countedDice.length; outcomes++) {
       console.log((outcomes + 1) + '\'s\t' + (outcomes + 1) * this.countedDice[outcomes]); 
  }
  }


  calculateLowerScore(){
        console.log('three of a kind:\t ' + this.threeOfAKind());
        console.log('four of a kind:\t ' + this.fourOfAKind());
        console.log('full house:\t ' + this.fullHouse());
        console.log('small straight:\t ' + this.smallStraight());
        console.log('large straight:\t ' + this.largeStraight());
  }


  threeOfAKind(){
    
    if(this.find(3))
      return this.sumCountedDice(); 
    else
      return 0;
  }

  fourOfAKind(){
    if(this.find(4))
      return this.sumCountedDice(); 
    else
      return 0;
  }

  fullHouse(){
    if(this.find(3) && this.find(2))
      return 25; 
    else
      return 0;
  }

  smallStraight(){
    '1234 , 2345, 3456'
    }

    largeStraight(){  
      '12345,23456'
  }

  yahtzee(){
    if(this.find(5))
      return 50; 
    else
      return 0;
  }

  chance(){
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

  find(key){
    for (let i = 0; i < this.countedDice.length; i++) {
        if(this.countedDice[i] == key)
          return true;
    }
    return false
  }

  reset(){
    for (let i = 0; i < this.countedDice.length; i++)
      this.countedDice[i] = 0;
  }
}
