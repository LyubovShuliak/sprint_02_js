


function animal_input() {
    let animal = prompt("What animal is the superhero most similar to?", "" )

    if (animal.length <= !20 && animal.match(!/[a - z]/s / gi)) {
       return "success"
    
    }
    else {
        return fail
    }

}

function gender(){
    let gender = prompt("Is the superhero male or female? Leave blank if unknown or other", "male, female or blank")
    if (gender == "male"|| gender == "female"|| gender == ""){
        return "success!"
    }
    else{
        return "Fail"
    }
  
}

function age_input(){
    let animal = prompt("What animal is the superhero most similar to?", "")
    let gender = prompt("Is the superhero male or female? Leave blank if unknown or other", "male, female or blank")
    let age = prompt("How old is the superhero?")
    let des_1
    let des_2
    let des_3
    let des_4
    let des_5
    switch (ani) {
        case "male":
            des_1 = `The superhero name is:${animal}-man!`
            
            break;
    
        default:
            break;
    }
  
}

alert(age_input())

