// obj3 = {"numero":123,"fecha":"2021-12- 31T23:00:00.000Z","cliente":{"nombre":"Juan","apellido":"Perez"},"items":[{"descripcion":" Monitor 20\"","precio":300},{"descripcion":"Teclado","precio":20}]}
// console.log(JSON.stringify(obj3, null, 3))

const axios = require('axios')

async function getUsuarios() {
    const res = null
    try {
        res = await axios.get('https://jsonplaceholder.typicode.com/users')
    } catch (e) {
        e
    }
    return res;

}
// combination async - await
(async () => {
    resultado = await getUsuarios();
    console.log(resultado)
})();