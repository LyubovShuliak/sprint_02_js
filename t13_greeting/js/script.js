function greet() {
    const first_name = prompt("Please, enter your first name", "").toUpperCase(1)
        if(first_name.match(/[^a-z]/gmi)){
        return "Wrong input!"
    }

    
    const last_name = prompt("Please, enter your first name", "").toUpperCase(1)
    if(last_name.match(/[^a-z]/gmi)){
        return "Wrong input!"
    }
    

    
    else
    {
        return `Hello,${first_name}  ${last_name}`
    }
}
    

alert(greet())
console.log(greet())