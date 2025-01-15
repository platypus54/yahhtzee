MAX_OUTCOMES = 6;
MAX_DICE = 5;

class Scoring{

  constructor() {
    this.sortedDice = [];
    this.countedDice = [];

    this.sortedDice.fill(0,0,5);
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

  calculateUpperScore(){
    for (let outcomes = 0; outcomes < this.countedDice.length; outcomes++) {
      console.log( (outcomes + 1) * this.countedDice[outcomes] )
      
  }
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

}
