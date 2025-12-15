var age = 66;
if(age >= 65) {
    console.log("Vous tirez vos revenus de votre pension.");
}
else if (age >= 18 && age <65) {
    console.log("Chaque mois, vous percevez un salaire.");
}
else if (age <18) {
    console.log("Vous recevez une allocation");
}
else     console.log("La valeur de la variable n'est pas numérique.");

var day = "Lundi";
switch (day) {
    default:
        console.log("Ce jour n'existe pas !");
        break;
    case "Lundi":
    console.log("C'est lundi");
    if (age <=18) {console.log("Il y a école !");}
    else if (age <65) console.log("Allez travailler !");
    else console.log ("Vous pouvez rester au lit");
    break;
        case "Mardi":
    console.log("C'est mardi");
    break;
        case "Mercredi":
    console.log("C'est mercredi");
    break;
        case "Jeudi":
    console.log("C'est jeudi");
    break;
        case "Vendredi":
    console.log("C'est vendredi");
    break;
        case "Samedi":
    console.log("C'est samedi");
    break;
        case "Dimanche":
    console.log("C'est dimanche");
    break;
}