obj3 = {"numero":123,"fecha":"2021-12- 31T23:00:00.000Z","cliente":{"nombre":"Juan","apellido":"Perez"},"items":[{"descripcion":" Monitor 20\"","precio":300},{"descripcion":"Teclado","precio":20}]}
// console.log(JSON.stringify(obj3, null, 3))


const edades = [20, 25, 30, 35];

function mediaEdades (edades) {
    var suma = 0;
    for (let edad of edades) {
        suma += edad;
    }
    var media = suma / edades.length;
    return media;
}

console.log(mediaEdades(edades))