import { render } from "./lib/country.controller"
import { getDOMElements } from "./lib/ui"

// #1 dOM interactie
getDOMElements()
    .then(() => {
        render()
    })
    .catch(err => {
        console.error('error', err)
    })

// #2 Lists bijhouden

// #3 Localstorage bijhouden