import url from "./url"

// Index load to load all cheeses
export const indexLoader = async () => {
    // make api call to backend index route
    const response = await fetch(url)
    // turn response into a javascript object
    const cheeses = await response.json()
    // return the javascript object so the Index component can use it
    return cheeses
}

// Show loader to load a single cheese
export const showLoader = async ({params}) => {
    // grab the id from params
    const id = params.id
    // make api call to backend show route
    const response = await fetch(url + id)
    // turn response into a javascript object
    const cheese = await response.json()
    // return the javascript object so the Show component can use it
    return cheese
}