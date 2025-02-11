function getCombinationsWithRepetition(arr, length, start = 0, current = [], result = []) {
  if (current.length === length) {
      result.push([...current]);
      return;
  }

  for (let i = start; i < arr.length; i++) {
      current.push(arr[i]);
      getCombinationsWithRepetition(arr, length, i, current, result); // Allow repeated values
      current.pop();
  }

  return result;
}

const combinationsWithRepetition = getCombinationsWithRepetition([1,2,3,4,5,6], 5);

document.writeln(`possible outcomes:${combinationsWithRepetition.length} <br>`)

let dict = new Map()
let scoring = new Map();

combinationsWithRepetition.forEach((element, key) => {
 
    let outcomeKey = ''
    let outcomeSum = 0;

    for (const numberIn of element) {
      outcomeKey += numberIn;
      outcomeSum += element;
    }

    scoring.set()

  dict.set(outcomeKey,new Map({"sum", outcomeSum}));
  console.log(dict);
})


dict.forEach((element, key) =>{
  document.writeln(element, key);
})

