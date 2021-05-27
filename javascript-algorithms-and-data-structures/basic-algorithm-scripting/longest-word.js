// Find the Longest Word in a String
function findLongestWordLength(str) {
    var string = str.split(" ");
    var longest = 0;
    var word = null;
    string.forEach(function(string) {
        if (longest < string.length) {
            longest = string.length;
            word = string;
        }
    });
    return word.length;
}
​
findLongestWordLength("The quick brown fox jumped over the lazy dog");
