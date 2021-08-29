// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.


var firstName = ['mario', 'luigi', 'giorgia', 'anna', 'clara'];
var lastName = ['rossi', 'ferrari', 'bianchi', 'fumagalli', 'bontempi'];
var guests = [];
var guest = '';

for (var i = 0; i < 3; i++){
  guest = `${firstName[Math.floor(Math.random() * firstName.length)]} ${lastName[Math.floor(Math.random() * lastName.length)]}`
  guests.push(guest)
}

console.log(guests);