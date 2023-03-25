/* 
Write a function called same, which accepts two arrays. 
The function should return true if every value in the array has it's corresponding value
squared in the second array. The frequency of values must be the same.

same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)

This pattern uses objects or sets to collect values/frequencies of values
This often avoid the need for nested loops or O(N^2) operations
*/


//Two nested loops is O(N^2)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for(let i = 0; i <arr1.length; i++){
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if(correctIndex === -1){
        return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}
// console.log("nest loops")
// console.log(same([1,2,3], [4,1,9]));
// console.log(same([1,2,3], [1,9]));
// console.log(same([1, 2, 1], [4, 4, 1]));



// Frequency counter, not nesting leads to O(N) i.e N+N+N as oppose to N^2
function same2(arr1, arr2){
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  
  for(let val of arr1){
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for(let val of arr2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  
  for(let key in frequencyCounter1){
    if(!(key ** 2 in frequencyCounter2)){
      return false;
    }
    if((frequencyCounter2[key**2]) !== frequencyCounter1[key]){
      return false;
    }
  }
  return true;
}
// console.log("frequency counter")
// console.log(same2([1,2,3], [4,1,9]));
// console.log(same2([1,2,3], [1,9]));
// console.log(same2([1, 2, 1], [4, 4, 1]));

same2([1,2,3,2,5], [9,1,4,4,11]);
