//Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro.

var group1 = [2, 5, 7, 9, 10, 13];
var group2 = [1, 4, 22];

console.log(group1);
console.log(group2);

var missingElm = Math.abs(group1.length - group2.length);

if (group1.length > group2.length) {
  for (var i = 0; i < missingElm; i++){
    group2.push(Math.ceil(Math.random() * 50))
  }
} else if (group2.length > group1.length) {
  for (var i = 0; i < missingElm; i++) {
    group1.push(Math.ceil(Math.random() * 50));
  }
}

console.log(group1);
console.log(group2);