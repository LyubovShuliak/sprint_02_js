
module.exports={checkBrackets}
function checkBrackets(str) {
    if (typeof str !== 'string'||str.indexOf(")") == -1 && str.indexOf("(") == -1) {
        return - 1
    }
    let str2 = str.match(/[(]|[)]/g).join("")
    let left = 0
    let right = 0
    for (let i = 0; i < str2.length; i++) {
        left += str2[i] == "(" ? 1 : -1
        if (left == -1) {
            left += 1//((
            right += 1
        }
    }
    return left + right
}








