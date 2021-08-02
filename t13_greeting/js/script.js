function capital_first_character(name) {
  // senya
  const first_character = name.charAt(0).toUpperCase(); // s
  return first_character + name.slice(1); //S + enya
}

function greet() {
  const pattern = /[^a-z]/gim;

  const first_name = prompt("Please, enter your first name", "");
  if (first_name.match(pattern)) {
    return "Wrong input!";
  }

  const last_name = prompt("Please, enter your last name", "");
  if (last_name.match(pattern)) {
    return "Wrong input!";
  }
  return `Hello, ${capital_first_character(
    first_name
  )} ${capital_first_character(last_name)}`;
}

alert(greet());
console.log(greet());