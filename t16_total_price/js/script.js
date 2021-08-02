function total(addItem, addPrice, current_sum) {
  if (current_sum == undefined) {
    return addItem * addPrice
  } else {
    return current_sum + addItem * addPrice
  }
}

let sum = total(1, 6)
sum = total(1, 6, sum)
sum = total(1, 6, sum)
sum = total(1, 6, sum)
sum = total(1, 6, sum)
sum = total(1, 6, sum)
sum = total(1, 6, sum)
sum = total(1, 6, sum)

console.log(sum)