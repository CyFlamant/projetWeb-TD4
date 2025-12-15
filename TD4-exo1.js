var age = 15;
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