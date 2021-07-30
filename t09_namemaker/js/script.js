function input() {
    const animal = prompt("What animal is the superhero most similar to?", "")

    if (animal.length > 20 || animal.match(/[^a-z]/gi)) {
        return "fail"
    }
    const age = prompt("How old is the superhero?")
    if (age.length > 5 || age.match(/\D/gi)) {
        return "fail"

    }
    const gender = prompt("Is the superhero male or female? Leave blank if unknown or other", "male, female or blank")

    if (gender === "male" && Number(age) < 18) {
        return `The superhero name is: ${animal}- boy!`

    }

    if (gender === "male" && Number(age) >= 18) {
        return `The superhero name is: ${animal}- man!`
    }

    if (gender === "female" && Number(age) >= 18) {
        return `The superhero name is: ${animal}- woman!`
    }
    if (gender === "female" && Number(age) < 18) {
        return `The superhero name is: ${animal}- girl!`
    }

    if (gender.trim() === "" && Number(age) < 18) {
        return `The superhero name is: ${animal}- kid!`
    }
    if (gender.trim() === "" && Number(age) >= 18) {
        return `The superhero name is: ${animal}- hero!`
    } else {
        return "fail"
    }

}

alert(input())