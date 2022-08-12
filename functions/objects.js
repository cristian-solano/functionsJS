const personal = {
    nombre: 'Luis',
    apellido: 'Garcia',
    edad: 89
}
// valores y llaves o claves
console.log(Object.values(personal));
console.log(Object.keys(personal).length);


const salarios = {
    enero: 1293,
    febrero: 1233,
    marzo: 44432
}
//sumatoria de los valores 
console.log(Object.values(salarios).reduce((total, actual) => {
    return total + actual;
}, 0)
)
//iterar en los items para volver mayuscula los strings
Object.entries(personal).forEach((par) => {
    const clave = par[0];
    const valor = par[1];
    if (typeof valor === 'string'){
        personal[clave] = valor.toUpperCase();
    }
});

console.log(personal)

const persona1 = [
    ['name', 'Caliche'],
    [ 'apellido', 'hernandez'],
    ['edad', 29]
];
// nos devulve un objeto con los valores del array
console.log(Object.fromEntries(persona1))


const persona2 = {
    nombre: 'Luis',
    apellido: 'Garcia',
    edad: 89,
    direccion: {
        calle: "calle fake 23",
        ciudad: "LA",
        pais: "USA",
        Facturacion: {
            calle: "calle oro"
        }

    }
};

const personalClonada = {};

//asignar valores aun objeto vacio simple
Object.assign(personalClonada, persona2)

personalClonada.direccion = {
    pais: "Colombia",
    ciudad: "Bogota"
}
console.log(persona2);
console.log(personalClonada);