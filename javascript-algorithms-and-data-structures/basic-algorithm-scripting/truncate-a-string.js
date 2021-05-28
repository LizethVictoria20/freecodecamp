// Truncate a String
function truncateString(str, num) {
    if (typeof(num) !== 'number') {
        console.log(str)
    }
    else if (str.length === num || str.length < num) {
        console.log(str)
    }
    else {
        let newString = ''
        for (let i = 0; i < num; i++) {
            newString += str[i];
        } 
    console.log(`${newString}...`)
    }
}
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)