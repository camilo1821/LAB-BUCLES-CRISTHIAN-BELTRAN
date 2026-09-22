// Consulta la Tarea 6 en tus Instrucciones para completar esta tarea

const prompt = require ('prompt-sync')();

let numero = prompt ("Ingrese un numero: ");

numero = Number(numero);

const array = [];
for (let i = 1; i <= Number(numero); i++) {
  array.push(i);
}

  console.log(array);


/*
  
const array = Array.from({length:Number(numero)}, (v, i) => i +1);
  console.log(array);

*/