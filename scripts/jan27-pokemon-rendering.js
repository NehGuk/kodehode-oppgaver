import { getData } from "./jan27-api-call.js"
const url = "https://pokeapi.co/api/v2/pokemon"
getData(url).then(data => {
    if (!data) return
    let pokeArray = data.results
    for (let i = 0; i < pokeArray.length; i++) {
        console.log(pokeArray[i].name)
    }
}).catch(error => {console.error("Error:", error)})