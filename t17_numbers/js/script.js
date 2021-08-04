
function isEven(number){
  return (number % 2 == 0?"number is even,":"")
  
}
function isDivide_3(number){
 return (number % 3 == 0?  "number is a multiple of 3,": "")
}

function isDivide_10(number){
  return (number % 10 == 0?"number is a multiple of 10,":"")
  
   
}


const beginRange = +prompt("", "1")
const endRange = +prompt("", "100")
let i
let text = " "
for (i = beginRange; i < endRange + 1; i++) {
  
  text+=`${i} ${isEven(i)} ${isDivide_3(i)} ${isDivide_10(i)} \n`
}
console.log(text)






