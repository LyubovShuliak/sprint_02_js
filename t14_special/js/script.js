function compare_to_infinity(number) {
  let number_first = number * 40000000;
  if (number_first == Infinity) {
    return "equal";
  }
  if (number_first < Infinity) {
    return `${number_first} < Infinity`;
  }
}

function number_input() {
  const number = +prompt("", "");
  if (number === 1) {
    return (number * 2) / Number("a");
  }
  if (number === 2) {
    return (number - number) / 0;
  }
  if (number === 3) {
    return 0 * Infinity;
  }
  if (number === 4) {
    return compare_to_infinity(number);
  } else {
    return "Wrong input";
  }
}

alert(number_input());