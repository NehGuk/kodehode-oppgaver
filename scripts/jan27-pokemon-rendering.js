import { getData } from "./jan27-api-call.js"
const pokemonDiv = document.querySelector("#pokemon-container")

const url = "https://pokeapi.co/api/v2/pokemon"
getData(url)
  .then((data) => {
    if (!data) return
    let pokeArray = data.results
    for (let i = 0; i < pokeArray.length; i++) {
      console.log(pokeArray[i].name)
      let pokemonName = document.createElement("h2")
      pokemonName.textContent = pokeArray[i].name
      pokemonDiv.appendChild(pokemonName)
      let pokemonDetails = document.createElement("p")
      pokemonDetails.innerHTML = `Click <a href=${pokeArray[i].url}>here</a> for details`
      pokemonDiv.appendChild(pokemonDetails)
    }
  })
  .catch((error) => {
    console.error("Error:", error)
  })
