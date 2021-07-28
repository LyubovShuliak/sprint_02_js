let x = solver()

function solver(a, b, c, d, e) {
    if (typeof a === 'number' &&  typeof b === 'number' && typeof c === 'number' && typeof d === 'number' && typeof   e === 'number'){
        return (a ** 2 - 5 * b * c + d / 3 + e).toFixed(2)
    }
    else{
        return "Wrong input"
    }
    

}


alert(solver(5, 6, 3, 2, 5))
alert(solver("dfr", 5, 6))
alert(solver(5,9,false, 6, 9))