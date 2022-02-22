import { getCountries } from "../utils/network";

export const list = {
    available: getCountries(),
    blocked: [],
}

// TODO: sort lists alphabetically (by name)
