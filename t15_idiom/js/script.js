function idiom() {
  let number = +prompt("Please, enter a number", "");

  switch (number) {
    case 1:
      return "Back to square 1";

      break;
    case 2:
      return "Goody 2-shoes";

      break;
    case 3:
      return "Two's company, three's a crowd";

      break;
    case 4:
      return "Counting sheep";

      break;
    case 5:
      return "Take five";

      break;
    case 6:
      return "Two's company, three's a crowd";

      break;
    case 7:
      return "Seventh heaven";

      break;
    case 8:
      return "Behind the eight-ball";

      break;
    case 9:
      return "Counting sheep";

      break;
    case 10:
      return "Cheaper by the dozen";

      break;

    default:
      alert(idiom());
      break;
  }
}
alert(idiom());