const helloAgain = "Hello, this is a string"
const initialName = document.querySelector("#initialName")
const newName = "Sofia"
const changeNameButton = document.querySelector("#change-name-button")
const url = "https://miku-api.vercel.app/mikuFacts"
const mikuFactsSection = document.querySelector("miku-facts-section")

changeNameButton.addEventListener("click", function () {
  initialName.textContent = newName
  changeNameButton.textContent = "Good job"
  changeNameButton.setAttribute("disabled", "true")
})

async function getData(url) {
  const response = await fetch(url)
  let data = await response.json()
  console.log(data)
  console.log(data.length)
  console.log(data[1])
}
getData(url)
