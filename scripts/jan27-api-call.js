async function getData(url) {
    let response = await fetch(url)
    let data = await response.json()
    if (!response.ok) {
        console.error("Couldn't reach API")
    }
    else {
        console.log(data)
        return data
    }
}
export { getData }