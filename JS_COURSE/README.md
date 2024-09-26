# Cours de JavaScript

Pour accéder à la page web de ce cours, [cliquez ici](index.html).
Pour le JS : [cliquez ici](js/index.js).

## Les bases de JavaScript

JavaScript est un langage de programmation de haut niveau, interprété, orienté objet et multi-paradigme. Il est principalement utilisé pour créer des pages web interactives et dynamiques. Il est souvent utilisé en conjonction avec HTML et CSS pour créer des applications web modernes.

### Les variables

Les variables sont des conteneurs pour stocker des données. En JavaScript, vous pouvez déclarer une variable en utilisant le mot-clé `var`, `let` ou `const`. Voici quelques exemples :

```javascript
var x = 5;
let y = 10;
const z = 15;
```

### Les types de données

JavaScript prend en charge différents types de données, tels que les nombres, les chaînes de caractères, les tableaux, les objets, les fonctions, etc. Voici quelques exemples :

```javascript
let number = 10;
let string = "Hello, World!";
let array = [1, 2, 3, 4, 5];
let object = { name: "John", age: 30 };
let func = function() { return "Hello, World!"; };
```

### Les opérateurs

JavaScript prend en charge différents types d'opérateurs, tels que les opérateurs arithmétiques, les opérateurs de comparaison, les opérateurs logiques, etc. Voici quelques exemples :

```javascript
let sum = 5 + 10;
let isGreaterThan = 10 > 5;
let andOperator = true && false;
```

### Les structures de contrôle

JavaScript prend en charge différentes structures de contrôle, telles que les instructions `if`, `else`, `else if`, `switch`, `for`, `while`, `do while`, etc. Voici quelques exemples :

```javascript
if (x > 10) {
    console.log("x is greater than 10");
} else {
    console.log("x is less than or equal to 10");
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

### Les fonctions

Les fonctions sont des blocs de code réutilisables qui peuvent être appelés par d'autres parties du code. En JavaScript, vous pouvez définir une fonction en utilisant le mot-clé `function`. Voici un exemple :

```javascript

function sayHello() {
    console.log("Hello, World!");
}

sayHello();
```

### Les objets

Les objets sont des collections de propriétés et de méthodes. En JavaScript, vous pouvez définir un objet en utilisant la notation littérale d'objet ou le constructeur d'objet. Voici un exemple :

```javascript

let person = {
    name: "John",
    age: 30,
    sayHello: function() {
        console.log("Hello, World!");
    }
};

person.sayHello();
```

### le ternaire

Le ternaire est une opération qui permet de faire un choix entre deux valeurs en fonction d'une condition. Voici un exemple :

```javascript
let x = 10;
let result = x > 5 ? "x is greater than 5" : "x is less than or equal to 5";
console.log(result);
```

### Les boucles for 

Les boucles for permettent de répéter une instruction un certain nombre de fois. Voici un exemple :

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

for in for off 

```javascript
let person = {
    name: "John",
    age: 30
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}
```

### Les fonctions anonymes et fonction recursive et fonction fléchée

Les fonctions anonymes sont des fonctions qui n'ont pas de nom. Elles sont souvent utilisées comme arguments de fonctions ou pour créer des fonctions auto-exécutantes. Voici un exemple :

```javascript
let add = function(x, y) {
    return x + y;
};

let result = add(5, 10);
console.log(result);
```

Les fonctions récursives sont des fonctions qui s'appellent elles-mêmes. Elles sont souvent utilisées pour résoudre des problèmes qui peuvent être décomposés en sous-problèmes plus petits. Voici un exemple :

```javascript
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

let result = factorial(5);
console.log(result);
```

Les fonctions fléchées sont une nouvelle syntaxe pour définir des fonctions en JavaScript. Elles sont plus courtes et plus concises que les fonctions traditionnelles. Voici un exemple :

```javascript
let add = (x, y) => x + y;

let result = add(5, 10);
console.log(result);
```



### Les tableaux et les méthodes de modification de tableau

Les tableaux sont des collections ordonnées d'éléments. En JavaScript, vous pouvez définir un tableau en utilisant la notation littérale de tableau ou le constructeur de tableau. Voici un exemple :

```javascript
let numbers = [1, 2, 3, 4, 5];
let fruits = new Array("Apple", "Banana", "Orange");
```

Il existe de nombreuses méthodes pour modifier un tableau en JavaScript, telles que `push()`, `pop()`, `shift()`, `unshift()`, `splice()`, `slice()`, `concat()`, `reverse()`, `sort()`, etc. Voici quelques exemples :

```javascript
let numbers = [1, 2, 3, 4, 5];

numbers.push(6); // Ajoute un élément à la fin du tableau
numbers.pop(); // Supprime le dernier élément du tableau
numbers.shift(); // Supprime le premier élément du tableau
numbers.unshift(0); // Ajoute un élément au début du tableau
numbers.splice(2, 0, 2.5); // Insère un élément à une position donnée
numbers.slice(1, 3); // Extrait une partie du tableau
numbers.concat([6, 7, 8]); // Fusionne deux tableaux
numbers.reverse(); // Inverse l'ordre des éléments du tableau
numbers.sort(); // Trie les éléments du tableau
```
