function isUnique(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false;
            }
        }
    }
    return true;
}
let string1 = "Hello";
let string2 = "Shiva";
console.log(isUnique(string1))
console.log(isUnique(string2))

