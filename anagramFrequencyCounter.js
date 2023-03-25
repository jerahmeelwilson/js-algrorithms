/*
Given two strings, write a function to determine if the second string is an anagram of the first. 
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema,
formed from iceman.

Assume all inputs will be
single words
no numbers, special chars, spaces
all lowercase.

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
*/

function validAnagram(str1, str2){
    if(str1.length === 0 && str2.length ===0){
        return true;
    }
    if(str1.length !== str2.length){
        return false;
    }
    let charCount1 = {};
    let charCount2 = {};
    for(let char of str1){
        charCount1[char] = (charCount1[char] || 0) + 1;
    }
    for(let char of str2){
        charCount2[char] = (charCount2[char] || 0) + 1;
    }
    for(key in charCount1){
        if(charCount1[key] !== charCount2[key]){
            return false;
        }
    }
    return true;
}



console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat","car")) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true