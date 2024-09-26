# Cours de JavaScript

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
