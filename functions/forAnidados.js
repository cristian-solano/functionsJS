const alumno = [
    [10, 8, 4, 3, 9],
    [10, 10, 4, 3, 10],
    [9, 8, 3, 3, 8],
    [10, 8, 10, 10, 10]
];


let materias = 0;
let sumCal = 0;
let reprobado = false;
// loop 1
for (let i = 0; i < alumno.length; i++) {
   // console.log(alumno[i])
   //loop2
   for (let j = 0; j < alumno[i].length; j++) {
      // console.log(alumno[i][j]);
      if (alumno[i][j] >= 6) {
       sumCal += alumno[i][j];
       materias++;
      } else {
          reprobado = true
          console.log('reprobado');
          if (reprobado) break;
      } 
   }
   if (reprobado) break;
}

if(!reprobado) {
    console.log('alumno aprobado')
    console.log(sumCal / materias)
} else {
    console.log('alumno reprobado');
}
console.log(materias);
console.log(Math.round(sumCal / materias))


