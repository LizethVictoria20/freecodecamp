// Return Largest Numbers in Arrays

function largestOfFour(arr) {
  let biggerNumber = 0;
  let newArra = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      // console.log(arr[i][j])
      if (arr[i][j] > biggerNumber) {
        biggerNumber = arr[i][j];
      }
    }
    newArra[i] = biggerNumber
  }
  console.log(newArra);
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

