let str = "))()(F)()(((FE"
const found = str.match(/[()]/g)
const found_Right = str.match(/[)]/g)
const found_Left = str.match(/[()]/g)

let found2 = found.toString().replace(/[,]/g, "").trim()
let lenght = found2.length
console.log(found2)
console.log(lenght)

let i 
let res1 = ""
let res2 = []
for (i = found2.indexOf("("); i < found.length;  i+= found2.indexOf(")") ){
    res2.push(res1)
    res1 = found2.indexOf(")", i) - found2.indexOf("(",i) 
    
   }
function isOdd(value) {
    if(value>0 && value%2==1){
        return value
    }       
}

let filtered = res2.filter(isOdd)
console.log(filtered)
function checkBrackets() {

    return lenght - filtered.length * 2
  
}
console.log(checkBrackets())




