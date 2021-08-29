// Il software deve chiedere per 5 volte all’utente di inserire un numero.;
// Il programma stampa la somma di tutti i numeri inseriti.;
// Esegui questo programma in due versioni, con il for e con il while.

var somma = 0

for (var i = 0; i < 5; i++){
  somma += parseInt(prompt('inserisci un numero'));
}
alert(`la somma dei numeri inseriti è: ${somma}`);

var sum = 0
var c = 0
while (c < 5) {
  sum += parseInt(prompt('inserisci un numero'));
  c++
}
alert(`la somma dei numeri inseriti è: ${sum}`);
