function sortEvenOdd(arr){
    const arr_2 = arr.sort((a, b) =>   a % 2 - b % 2 )
    arr_2.sort( (a, b) =>  a - b );
}
const arr = [6, 2, 15, 5, 1, 3, 8, 1, 8, 10, 7, 11]
sortEvenOdd(arr);
const array = [6, 699, 69444, 369167,26, 25, 36, 37]
sortEvenOdd(array)
console.log(array)