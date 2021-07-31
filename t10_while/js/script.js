let number = 2;
let i = 0;
let res1 = "";

do {
  i = i + 1;
  res1 += "2 * " + i + " = " + i * 2 + "\n";
} while (i < 9);

i = 9;
let res2 = "";
while (i <= 9) {
  res2 += i * 2 + "";
  i++;
}

alert(res1);