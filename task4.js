// Consulta la Tarea 4 en tus Instrucciones para completar esta tarea

for (let i = 1; i <= 105; i++) {
    let salida =  '';
  if (i % 3 === 0) salida += "Fizz"; 
  if (i % 5 === 0) salida += "Buzz";
  if (i % 7 === 0) salida += "Woof";
  if (salida === '') salida = (i);
  console.log(salida);
    
};

