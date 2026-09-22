// Consulta la Tarea 7 en tus Instrucciones para completar esta tarea

let buzzWords = [
  "Fizz",
  "Buzz",
  "Woof",
  "Bark",
  "Awoo",
  "Bang"
];


for (let i = 1; i <= 105; i++) {
    let salida =  '';
  if (i % 3 === 0) salida += buzzWords[0]; 
  if (i % 5 === 0) salida += buzzWords[1];
  if (i % 7 === 0) salida += buzzWords[2];
  if (i % 2 === 0) salida += buzzWords[3];
  if (i % 11 === 0) salida += buzzWords[4];
  if (i % 13 === 0) salida += buzzWords[5];
  if (salida === '') salida = (i);
  console.log(salida);
    
};