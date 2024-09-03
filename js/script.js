"use strict";

//Hvad er Ternary Operator? I JavaScript er det en kortere måde at skrive en simpel if-else-sætning på.

// arbejder med tre operander: en betingelse, et resultat, hvis betingelsen er sand (true), og et resultat, hvis betingelsen er falsk (false)


// condition ? expression1 : expression2;


/* condition: Dette er en udtryk, der evalueres til enten sandt (true) eller falskt (false).
expression1: Dette er værdien eller udtrykket, der returneres, hvis betingelsen er sand (true).
expression2: Dette er værdien eller udtrykket, der returneres, hvis betingelsen er falsk (false). */


let age = 20;
let message = (age >= 18) ? "Du er myndig." : "Du er ikke myndig.";
console.log(message); // Output: "Du er myndig."


// et andet eksempel

let score = 85;
let grade = (score >= 90) ? "A" :
            (score >= 80) ? "B" :
            (score >= 70) ? "C" :
            (score >= 60) ? "D" : "F";

console.log(grade); // Output: "B"
