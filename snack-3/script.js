// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.


var firstName = ['mario', 'luigi', 'giorgia', 'anna', 'clara'];
var lastName = ['rossi', 'ferrari', 'bianchi', 'fumagalli', 'bontempi'];
var guests = [];

for (var i = 0; i < 3; i++){
  var indexFirstName = Math.floor(Math.random() * firstName.length)
  var indexLastName = Math.floor(Math.random() * lastName.length)
  var guest = `${firstName[indexFirstName]} ${lastName[indexLastName]}`
  guests.push(guest)
}

console.log(guests);