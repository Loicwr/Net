let pairImpair = prompt("Saisi un nombre :");
pairImpair = parseInt(pairImpair);
if( pairImpair % 2 === 0){
    console.log(`le nombre ${pairImpair} est pair !`);
}
else {
    console.log(`le nombre ${pairImpair} est impair !`);   
}

let prenom = prompt("Quel est ton prénom ?");
console.log(`Bonjour, ${prenom} ! Heureux de faire votre connaissance.`);

let nombreEntier = [4, 12, 7, 19, 3, 8];

let somme = 0;
for (let i = 0; i < nombreEntier.length; i++){
    somme += nombreEntier[i];
    if (nombreEntier[i] > 10 ){
        console.log("Les nombres supérieurs a 10 sont :" + nombreEntier[i]);
        
    }
}
console.log("La Somme du tableau est :", somme);

