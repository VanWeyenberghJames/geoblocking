import { Country } from '../interfaces/country'
import { render } from './country.controller'
import { list as dataList } from './country.data'

export const list = {
    available: undefined,
    blocked: undefined,
}

const search = {    
    available: undefined,
    blocked: undefined,
}

const moveTo = {
    available: undefined,
    blocked: undefined,
}

const actions = {
    cancel: undefined,
    save: undefined,
}

export const getDOMElements = (): Promise<void> => {
    return new Promise((resolve, reject) => {
        actions.cancel = document.querySelector('.js-cancel')
        actions.save = document.querySelector('.js-save')

        list.available = document.querySelector('.js-list-available')
        list.blocked = document.querySelector('.js-list-blocked')

        moveTo.available = document.querySelector('.js-move-to-available')
        moveTo.blocked = document.querySelector('.js-move-to-blocked')

        search.available = document.querySelector('.js-search-available')
        search.blocked = document.querySelector('.js-search-blocked')

        if (
            actions.cancel &&
            actions.save &&
            list.available &&
            list.blocked &&
            moveTo.available &&
            moveTo.blocked &&
            search.available &&
            search.blocked
        ) {
        resolve()
        } else {
            reject ('Some DOM elements are missing!')
        }
    })
}

export const renderCountries = (subList?: string | undefined) => {
    let repeat = undefined
    if (!subList) {
        subList = 'available'
        repeat = 'blocked'
    }

    list[subList].innerHTML = '' // Always clear DOM before inserting

    dataList[subList].forEach((c: Country) => {
        const li = document.createElement('li')
        li.classList.add('c-country')

        const button = document.createElement('button')
        button.classList.add('c-country-button')
        button.addEventListener('click', function() {
            console.log('You clicked', c.name)
        })
        
        button.innerHTML += `
        <div class="c-country__flag-holder">
            <img
            class="c-country__flag"
            src="https://flagcdn.com/${c.alpha2Code.toLowerCase()}.svg"
            alt="Flag of ${c.name}"
            />
        </div>
        <p class="c-country__name">${c.name}</p>

        <svg
                class="c-country__arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
        `

        // Add the button to the li
        li.append(button)

        // Add the li to the parent list
        
        list[subList].append(li)
    })

    if (repeat) renderCountries(repeat)
}