// Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
    let newString = '';
    if (num < 0) {
        console.log('empty')
    }
    else {
        for (let i = 0; i < num; i++) { // 1 < 3
            newString += str; // abc-abc-abc
        }
    }
    console.log(newString)
}
  
repeatStringNumTimes("abc", 3);
