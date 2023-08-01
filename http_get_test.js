const ax = require("axios")

async function getDatos () {
    let varaux
    try {
        varaux = await ax.get("https://jsonplaceholder.typicode.com/users")
    } catch (e){
        return {e}
    }   
    return varaux

}
(async () => {
   var datos = await getDatos()
   if (datos.data){
        console.log(JSON.stringify(datos.data, null, 4))
   } else {
    console.log(JSON.stringify(datos))
   }
})()


