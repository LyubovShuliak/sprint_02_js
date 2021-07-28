

function display_hero(team, universe, race, eyeColor, hairColor){
    if ((team == "Avengers" || team == "S.H.I.E.L.D.") && race == "human" && universe == "Marvel" && eyeColor == "green" && hairColor == "lightBrown/green"){
        return "This is Black Widow!"

    }
    if ((team == "Justice League Of America" || team == "Teen Titans") && (race == "human" || race == "kryptonian") && universe == "Marvel" && eyeColor == "blue" && hairColor == "black"){
        return "This is a Superman or Robin!"
    }

    else{
        return "Didn't recognize!"
    }
}

alert(display_hero('Justice League Of America', "Marvel", "human", "green", "lightBrown/green"))