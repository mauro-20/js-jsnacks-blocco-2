// Crea un array di numeri interi
// e fai la somma di tutti gli elementi che sono in posizione(indice dell'array) dispari

var numbers = [1, 23, 5, 12, 7, 456, 73, 203, 46, 6];
var sum = 0;

console.log(numbers);

for (var i = 0; i < numbers.length; i++) {
  if (i % 2) {
    console.log(numbers[i]);
    sum += numbers[i]
  }
}

console.log(`la somma dei numeri in posizione dispari è ${sum}`);