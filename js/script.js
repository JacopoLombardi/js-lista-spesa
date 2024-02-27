
// Array con la lista della spesa
const listaSpesa = [
   'elemento_1', 
   'elemento_2', 
   'elemento_3', 
   'elemento_4', 
   'elemento_5', 
   'elemento_6'
];

// assegno su Js una variabile dell'HTML
const output = document.getElementById('output');

// contatore del ciclo While
counter = 0;


// ciclo While che cicle finchè non raggiunge l'ultimo elemento
while(counter < listaSpesa.length){
   output.innerHTML += `<li class="fs-4">${listaSpesa[counter]}</li>`;  // stampo sull'HTML uno ad uno gli elementi dell'Array 
   counter++;
}