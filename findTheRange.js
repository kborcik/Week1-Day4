/* This was my attemp at the days problem before learning how to use arrays
The purpose was to print the max and min of the array.
  let MaxandMin = [1,7,8,4,10,51,2,6]
let x =0
for(let i = 0; i<= MaxandMin.length; i ++){
if (MaxandMin [x]<[0,1,2,3,4,5,6,7] || MaxandMin[x]>[0,1,2,3,4,5,6,7]){
    console.log(MaxandMin[x])
}else (x++)
}
*/




let array = [1,4,11,2,37,-4]
let min = array [0]
let max = array [0]
for(let i = 0; i < array.length; i++){
let currentvalue = array[i]
if (currentvalue < min){
    console.log(`The current value ${currentvalue} is lower than our currnet minimum ${min}`)
    min = currentvalue
}
if (currentvalue > max) {
    console.log (`The current value ${currentvalue} is lower than our currnet minimum ${min}`)
    max = currentvalue
}
}

console.log (`in this array ${array} the highest value is ${max} and the lowest value is ${min}`)