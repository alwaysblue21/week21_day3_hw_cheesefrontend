import url from "./url"

import {redirect} from "react-router-dom"


// Create Action for Creating Cheeses
export const createAction = async({request}) => {
    // parse out the form data
    const formData = await request.formData();

    // construct the body for our api call
    const newCheese = {
        name: formData.get("name"),
        origin_country: formData.get("origin_country"),
        type: formData.get("type")
    }

    // make a request to create a cheese
    await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCheese)
    })

    // redirect to the index page
    return redirect("/")
}


// Update Action for Updating Cheeses
export const updateAction = async({request, params}) => {
    // get the id from params
    const id = params.id
    // parse out the form data
    const formData = await request.formData();
    // construct the updated cheese
    const updatedCheese = {
        name: formData.get("name"),
        origin_country: formData.get("origin_country"),
        type: formData.get("type")
    }

    // make a request to update a cheese
    await fetch(url + id, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedCheese)
    })

    // redirect to the show page
    return redirect(`/post/${id}`)
}

// Delete Action for Deleting Cheese
export const deleteAction = async({params}) => {
    // get the id from params
    const id = params.id

    // make a request to delete a cheese
    await fetch(url + id, {
        method: "delete"
    })

    // redirect to the index page
    return redirect("/")
}