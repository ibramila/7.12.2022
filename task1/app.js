// input: salam 123, 
//  output 5
function countChars(words) {
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        if (isNumber(words[i]) && words[i] != " ") {
            count++;
        }

    }
    return count;
}
// check if char is not a Number;
function isNumber(char) {
    let charnum = parseInt(char);

    if (isNaN(charnum)) {
        return true;
    } else {
        return false;

    }
}
console.log(countChars("aaa5r8 aaa"))