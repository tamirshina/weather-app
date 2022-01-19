import config from '../api/config'

const { api } = config

export async function fetchData(url) {

    const response = await fetch(url)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    return await response.json()
}

export function formatUrl(type, uniqueParam) {
    const data = {
        apikey: api.apiKey,
        language: 'en',
    }

    switch (type) {
        case 'current':
            data['details'] = false
            const currentParams = new URLSearchParams(data);
            return api.base + api.paths.current + uniqueParam + '?' + currentParams

        case 'forecast':
            data['details'] = false
            data['metric'] = true
            const fiveDaysParams = new URLSearchParams(data);
            return api.base + api.paths.fiveDays + uniqueParam + '?' + fiveDaysParams

        case 'autoComplete':
            data['q'] = uniqueParam
            const completeParams = new URLSearchParams(data);
            return api.base + api.paths.autocomplete + '?' + completeParams
        default:
            return api.base + api.paths.current + uniqueParam + '?'
    }
}

export function setToLocalStorage(key, value) {
    if (typeof window !== "undefined") {
        window.localStorage.setItem(key, value)
    }
}

export function getFromLocalStorage(key) {
    if (typeof window !== "undefined") {
        const item = window.localStorage.getItem(key)
        console.log('util ---', item)
        if (item === "undefined" || !item) {
            return null
        } else {
            return JSON.parse(item)
        }
    }
}