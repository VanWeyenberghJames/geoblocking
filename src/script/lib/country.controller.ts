import { list, renderCountries } from './ui'

export const render = () => {
    list.available.innerHTML = renderCountries('available')
    list.blocked.innerHTML = renderCountries('blocked')

    
}