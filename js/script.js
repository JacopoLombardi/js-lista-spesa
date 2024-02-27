// assegno su Js una variabile dell'HTML
const output = document.getElementById('output');


// Array con la lista della spesa
const listaSpesa = ['elemento1', 'elemento2', 'elemento3', 'elemento4', 'elemento5', 'elemento6'];


counter = 0;


// ciclo While che cicle finchè non raggiunge l'ultimo elemento
while(counter < listaSpesa.length){

   output.innerHTML += listaSpesa[counter];
   counter++;
   
}