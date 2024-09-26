////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('%c---------- ÉNONCÉ 01 ----------', 'color: orange'); ////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Créer un algorithme qui sert à convertir des degrés Celsius en degrés Fahrenheit.
// Le résultat doit être de type nombre.
// Si on donne un autre type qu'un nombre en argument, vous devez retourner "Données en entrée non correctes."

// ----------------- CONSEILS -----------------

// Comme le dev c'est aussi de la recherche Google je vous laisse trouver la formule de conversion :)

// Pour connaitre le type de notre argument on peut faire
// console.log(typeof(5));  "number"
// console.log(typeof("abc"));  "string"
// etc ...

function conversion(degCel) {
    if (typeof degCel !== 'number') {
        return "Données en entrée non correctes.";
    }

    return (degCel * 9 / 5) + 32;
}

console.log(conversion(50));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('%c---------- ÉNONCÉ 02 ----------', 'color: orange'); ////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Créez un Algorithme qui va retourner une phrase. 
// par exemple : "Bonjour à tous" donnera "suot à ruojnoB"

// ----------------- CONSEILS -----------------

// La fonction join(), permet de transformer un tableau en chaine de caractère.
// La fonction split(), permet de transformer une chaine de caractère en tableau.
// La fonction reverse(), permet de retourner les éléments d'un tableau.

function retourneLaPhrase(str) {
    return str.split("").reverse().join(""); // En gros je split la chaine en un tableau et je la retourne et la remet bien
}

console.log(retourneLaPhrase("Bonjour à tous"));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('%c---------- ÉNONCÉ 03 ----------', 'color: orange'); ////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Créez un Algorithme qui va factoriser le nombre qu'on lui passe en argument.
// Pour rappel lorsqu'on factorise 5 :
// 5! = 1 * 2 * 3 * 4 * 5 = 120.
// C'est le produit de tous les entiers qui précèdent ou qui sont égaux à N, ici 5.

// ----------------- CONSEILS -----------------

// Une boucle peut être utile

function factoriser(num) {
    let result = 1;

    for(let i = 1; i <= num; i++) {
        result *= i;
    }

    return result;
}

console.log(factoriser(5));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('%c---------- ÉNONCÉ 04 ----------', 'color: orange'); ////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Créez un Algorithme qui vous informe si les lettres (second arguments) correspondent à la fin du mot (premier argument).
// Si elles correspondent, retournez "La fin est similaire"
// Sinon "La fin ne correspond pas".


// ----------------- CONSEILS -----------------


// La fonction "slice" permet de découper une chaine de caractère.
// Essayez cela : 
// console.log("hello".slice(2));

// La méthode length permet de donner la longueur d'une chaine.
// Essayez cela :
// console.log("hello".length);

// Mais il y a des dizaines de façon de résoudre cet algorithme(et les autres...),
// N'hésitez pas à le faire à votre façon et à TESTER vos idées 

function finSimilaire(str, fin) {
    return str.slice(-fin.length) === fin ? "La fin est similaire" : "La fin ne correspond pas";
}

console.log(finSimilaire('mars', 'rs'));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('%c---------- ÉNONCÉ 05 ----------', 'color: orange'); ////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Créez un Algorithme qui prend un tableau composé de plusieurs tableaux en argument et qui retourne un seul tableau qui contient la valeur maximale de chaque tableaux.

// ----------------- CONSEILS -----------------

// Une boucle "for" permet d'itérer dans un tableau.
// Vous n'êtes pas limité à une boucle "for", vous pouvez en utiliser plusieurs...

// la méhode [].push(), pour pousser un élément dans un tableau;
// Testez :
// var arrTest = [0,10];
// arrTest.push(80);
// console.log(arrTest);

function plusGrandNb(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(Math.max(...arr[i]));
    }

    return result;
}

let arr = [
    [1, 5, 8, 3],
    [15, 47, 88, 26],
    [32, 35, 37, 39],
    [3000, 1001, 857, 1]
];

console.log(plusGrandNb(arr));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('%c---------- ÉNONCÉ 06 ----------', 'color: orange'); ////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Créez un Algorithme qui prend une phrase en argument et qui retourne cette meme phrase avec la premiere lettre de chaque mots en Majuscule.

// ----------------- CONSEILS -----------------

// Fonctions utiles : 
// map(); méthode "callback", qui permet de traiter chaque élément d'un tableau et d'en retourner un nouveau avec les éléments modifiés.
// toUpperCase(); transforme en majuscule.
// toLowerCase(); pour transformer en minuscule.
// charAt(); pour sélectionner un caratère.
// split(); pour transformer string->tableau.
// replace(); pour remplacer une partie d'une chaine.

function maj(str) {
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

console.log(maj("Les sanglots longs des violons de l'automne..."));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('%c---------- ÉNONCÉ 07 ----------', 'color: orange'); ////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Trouve la longueur du mot le plus longs dans une phrase et retourne la.

// ----------------- CONSEILS -----------------

// Plusieurs méthodes sont possibles
 
// 1: avec une boucle For.
// 2: avec une méthode Callback.(reduce,Math.max)
// 3: avec une récursion.(slice, splice)

function trouverLongueurMax(str) {
    return str.split(" ").reduce((acc, word) => Math.max(acc, word.length), 0);
}

console.log(trouverLongueurMax("Je n’ai pas de rebord à mes épaulettes."));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('%c---------- ÉNONCÉ 08 ----------', 'color: orange'); ////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Créez un Algorithme qui prend un tableau et un nombre en parametre.
// Vous devez d'abord trier ce tableau du plus petit au plus grand.
// Puis retourner la position du nombre si on l'insère dans ce tableau
// entre la valeur en dessous et au dessus de ce nombre.

// Par exemple : insere([10,20,30,40], 25) -> 2 
// insere([30,45,87,96,54,29], 2000) -> 6, car il sera inseré à la 6eme place.

// ----------------- CONSEILS -----------------

// la premiere position d'un tableau est 0 !
// Tableau ->  [1,2,3,4]
// Position ->  0 1 2 3
// sort(); permet de trier.
// Boucle "For";
// N'oubliez le cas ou le nombre est le plus grand de la liste.

function insere(arr, num) {
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        if (num <= arr[i]) {
            return i;
        }
    }

    return arr.length;
}

console.log(insere([30,45,87,96,54,29], 60));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('%c---------- ÉNONCÉ 09 ----------', 'color: orange'); ////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Créez un Algorithme qui prend un tableau qui contient deux chaines en parametre.
// On doit vérifier si la premiere chaine contient au moins une fois toutes les
// lettres de la seconde, si oui on retourne true, si non false.

// ----------------- CONSEILS -----------------

// Boucle
// toLowerCase();
// indexOf();

function memeLettres(arr) {
    let mot1 = arr[0].toLowerCase();
    let mot2 = arr[1].toLowerCase();

    for (let i = 0; i < mot2.length; i++) {
        if (mot1.indexOf(mot2[i]) === -1) {
            return false;
        }
    }

    return true;
}

console.log(memeLettres(["concupiscence", "sens"]));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('%c---------- ÉNONCÉ 10 ----------', 'color: orange'); ////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Vous recevez un tableau de deux chiffres en entrée, additionnez tous les chiffres 
// qui se trouvent entre ces deux valeurs.
// exemple : additionner([3, 8]) => 3+4+5+6+7+8 = 33

// ----------------- CONSEILS -----------------

// Boucle "for"
// Math.max
// Math.mix

function additionner(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let result = 0;

    for (let i = min; i <= max; i++) {
        result += i;
    }

    return result;
}

console.log(additionner([3, 8]));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('%c---------- ÉNONCÉ 11 ----------', 'color: orange'); ////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Vous devez créer un algorithme qui retourne les différences entre deux tableaux.
// Il prend deux tableaux en arguments et retourne un tableau contenant les différences.

// ----------------- CONSEILS -----------------

// Il est possible de créer une fonction dans une fonction.
// indexOf()
// push();
//
// Ou alors...
// concat();
// filter();

function difTab(arr1, arr2){
    return arr1.concat(arr2).filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el));
}

console.log(difTab([1, 2, 3, 5], [1, 2, 3, 4, 5]));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('%c---------- ÉNONCÉ 12 ----------', 'color: orange'); ////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// On passe en entrée un tableau d'objet et un objet, vous devez afficher, dans un tableau, les objets qui ont la même propriété("nom") ET la même valeur associée à cette propriété.
// l'exemple ici devrai retourner : [{prenom: "Jean", nom: "Lafite"}, {prenom: "Lucien", nom: "Lafite"}];

// ----------------- CONSEILS -----------------

// Object.keys(obj) -> renvoie un tableau avec les propriétés d'un objet.
// filter(), filtre et retourne un tableau
// obj.hasOwnProperty() -> vérifie si un objet possede une propriete, retourne true ou false;

function trouverLaPersonne(data, source) {
    return data.filter(obj => Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]));
}

var liste = [
    { prenom: "Tom", nom: "Durand" },
    { prenom: "Juliette", nom: "Garcia" },
    { prenom: "Jean", nom: "Lafite" },
    { prenom: "Lucien", nom: "Lafite" },
    { prenom: "Lucien", abc: "Lafite" }
];

console.log(trouverLaPersonne(liste, { nom: "Lafite" }));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('%c---------- ÉNONCÉ 13 ----------', 'color: orange'); ////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Entrainons-nous au Regex !
// Vous devez créer un algorithme qui reçoit une chaine de caractères et qui va supprimer tous les chiffres, et les caractère (%-/) de cette chaine grace à un regex.

// le resultat est : il est temps de savoir utiliser le regex !

// ----------------- CONSEILS -----------------

// Le regex permet de selectionner facilement certains caractères et donc de les remplacer facilement avec la méthode replace();

function regexTime(str) {
    return str.replace(/[0-9%-/]/g, '');
}

console.log(regexTime('I4l est te-mp///s de %sav/oir u845til85iser 6le re%gex !'));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('%c---------- ÉNONCÉ 14 ----------', 'color: orange'); ////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Cette fonction reçoit deux paramètres, un tableau et une fonction.
// Triez le premier paramètre(arr).
// Puis retournez un nouveau tableau après avoir utilisé la fonction (second param)
// avec chacun des éléments du premier tableau.

// ----------------- CONSEILS -----------------

// shift();
// Boucle for;

function fonctionParam(arr, func) {

}

console.log(fonctionParam([1, 7, 2, 3, 90, 4], function(n) {return n >= 3;}));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('%c---------- ÉNONCÉ 15 ----------', 'color: orange'); ////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Repetez la chaine (premier parametre) un certain nombre de fois (second parametre).
// Cette algorithme est relativement facile, c'est pourquoi je vais vous demander de trouver au moins trois façons différentes de le réaliser.

// ----------------- CONSEILS -----------------

// Recursion.
// opérateur ternaire.
// While.

function repete(str, num) {
  
}

console.log(repete('abc', 4));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('%c---------- ÉNONCÉ 16 ----------', 'color: orange'); ////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Vous avez 7 valeurs dans un tableau qui représentent le cours de l'or pour les 7 jours d'une semaine.
// Vous devez, grace à un algorithme, retourner le meilleur jour pour investir et le meilleur jour pour vendre.
// Ici le meilleur jour pour investir est Jeudi (4eme valeur du tableau), avec un cours à 2€ et le meilleur pour vendre est vendredi, avec un cours à 80 donc un bénéfice de 78€.

// Voici ce que vous devez retourner : "Le meilleur coup à faire cette semaine était d'investir le jeudi et de revendre le vendredi pour un bénéfice de 78."

// Vous pouvez changer la tournure de la phrase mais vous devez obligatoirement retourner le jour d'achat, le jour de vente, et le montantdu bénéfice.

// Bon courage !

// ----------------- CONSEILS -----------------

// indexOf();
// shift;
// boucle for;
// travaillez avec des tableaux;
// push();

function meilleurInvestissement(arr, jours) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let benefice = max - min;

    return `Le meilleur coup à faire cette semaine était d'investir le ${jours[arr.indexOf(min)]} et de revendre le ${jours[arr.indexOf(max)]} pour un bénéfice de ${benefice}.`;
}

let jours = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
let cours = [10, 20, 30, 2, 80, 50, 40];

console.log(meilleurInvestissement(cours, jours));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('%c---------- ÉNONCÉ 17 ----------', 'color: orange'); ////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Vous devez vous assurer que vos utilisateurs rentrent bien un numéro Français.
// Ce numéro doit : 
// Démarrer par un 0 et être suivi d'un chiffre entre 1 et 9.
// Il faut 4 duos de chiffre de 0 à 9 après les deux premiers.
// Nous accepterons des espaces( ), tirets(-) et points(.) entre les duos de chiffres.
// Retournez true si la chaine en parametre passe le test (si c'est un numéro valable) et false en cas contraire.

// ----------------- CONSEILS -----------------

// Regex time!
// Google est votre ami.
// "Regex tool online" aussi.
// La document MDN et autre.

// Bon courage.

function telephoneCheck(str){
    
    var reg = /^(0|0\s|0-|0\.)([1-9])(\d{2}|\d{2}\s|\d{2}-|\d{2}\.)(\d{2}|\d{2}\s|\d{2}-|\d{2}\.)(\d{2}|\d{2}\s|\d{2}-|\d{2}\.)(\d{2}|\d{2}\s|\d{2}-|\d{2}\.)$/;

    return reg.test(str);

}

console.log(telephoneCheck("06 44 64 90 21"));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('%c---------- ÉNONCÉ 18 ----------', 'color: orange'); ////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Cet algorithme prend un tableau composé lui même de plusieurs tableaux en entrée. Vous devez "aplatir" les différentes couches de tableaux, c'est à dire
// retourner un seul tableau qui contient les valeurs de tous les tableaux qui le composent.

// [1, [2], [3, [[4]]]]  retourne [1,2,3,4];
// ([1, [], [3, [[4]]]]) retourne [1, 3, 4].
// [1, {}, [3, [[4]]]]   retourne [1, {}, 3, 4].

// ----------------- CONSEILS -----------------

// Recursion;
// Array.isArray();
// forEach();
// Boucle for...

function aplatisCeTableau(arr) {

}
  
console.log(aplatisCeTableau([1, {}, [3, [[4]]]] ));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('%c---------- ÉNONCÉ 19 ----------', 'color: orange'); ////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Vous devez créer un algorithme qui va convertir le nombre passé en parametre en chiffre Romain !
// Vous disposez de deux tableaux pour faire les conversions.

// 36 = XXXVI
// 2000 = MM
// 5648 = MMMMMDCXLVIII

let convertisseurRomain = function(num) {
    let valeurDecimale = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let chiffreRomains = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

}
      
console.log(convertisseurRomain(36));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('%c---------- ÉNONCÉ 20 ----------', 'color: orange'); ////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Additionez tous les nombres premiers d'un nombre donné, en comptant ce nombre.
// Les nombres premiers sont les nombres qui peuvent seulement être divisés par 1 et
// par eux-mêmes.
// 1 n'est pas un nombre premier.
// La liste des nombres premiers commencent comme cela : 
// 2, 3, 5, 7, 11, 13, 17, 19 etc ...

// ----------------- CONSEILS -----------------

// Recursion.
// Fonction dans une fonction.
// If, For ...
// Modulo (%).

function additioneNbPremiers(num) {

}
console.log(additioneNbPremiers(10));
