
let str1 = 'Youre catnip to a girl like me. Handsome, dazed, and to die for ...'
let str2 = 'Batman: "I tried to save you."'
let str3 = 'Selina Kyle: catwoman"Mmm seemsCatwomanlike everyCatWomanwoman you try to savewindsCatWOMANup dead... or deeply resentful."'



function srt_lenght() {
    return str1.length
}
function str_top_case() {
    return str1.toUpperCase()
}

function str_chart(a) {
    return str1.charAt(a)
}
function str_replace() {
    return str3.replace(/catwoman/gi, ' ')
}



alert(`Just string: ${str1}
Lenght: ${srt_lenght()}
Caracter number 2 is: ${str_chart(2)}
To uppercase ${str_top_case()}
Concatenation in a phrase:${str1} - Catwoman
[Batman Returns] ${str2}
${str_replace()}`)

