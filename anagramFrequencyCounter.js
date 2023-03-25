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
    if(str1.length !== str2.length){
        return false;
    }
    let charCount = {};
   
    for(let char of str1){
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        // can't find letter or letter is zero then it's not an anagram
        if (!charCount[letter]) {
          return false;
        } else {
          lookup[letter] -= 1;
        }
      }
    return true;
}



// console.log(validAnagram('', '')) // true
// console.log(validAnagram('aaz', 'zza')) // false
// console.log(validAnagram('anagram', 'nagaram')) // true
// console.log(validAnagram("rat","car")) // false
// console.log(validAnagram('awesome', 'awesom')) // false
// console.log(validAnagram('qwerty', 'qeywrt')) // true
// console.log(validAnagram('texttwisttime', 'timetwisttext')) // true


// function validAnagram(first, second) {
//     if (first.length !== second.length) {
//       return false;
//     }
  
//     const lookup = {};
  
//     for (let i = 0; i < first.length; i++) {
//       let letter = first[i];
//       // if letter exists, increment, otherwise set to 1
//       lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
//     }
//     console.log(lookup)
  
//     for (let i = 0; i < second.length; i++) {
//       let letter = second[i];
//       // can't find letter or letter is zero then it's not an anagram
//       if (!lookup[letter]) {
//         return false;
//       } else {
//         lookup[letter] -= 1;
//       }
//     }
  
//     return true;
//   }
  
//   // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
//   validAnagram('anagrams', 'nagaramm')