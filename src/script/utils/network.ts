import countries from '../../assets/countries.json'
import { Country } from '../interfaces/country'

export const getCountries = (): Country[] => countries //dit returnt countries

export const getCoutryByAlpha2Code = (alpha2Code: string): Country =>
{
   // TODO: get a single country
    return undefined
}

