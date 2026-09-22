// Consulta la Tarea 5 en tus Instrucciones para completar esta tarea

const prompt = require ('prompt-sync')();

let numero = prompt ("Ingrese un numero: ");

numero = Number(numero);

let i = 1;
let limite = Number(numero);

while(i <= limite){
    console.log(i);
        i++;                
}

