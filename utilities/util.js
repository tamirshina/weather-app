import config from '../api/config'

const { api } = config
export async function fetchData(url) {

    const response = await fetch(url)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    return await response.json()
}

export function formatUrl(type, city) {
    const data = {
        apikey: api.apiKey,
        language: 'en',
        details: false
    }

    switch (type) {
        case 'current':
            const currentParams = new URLSearchParams(data);
            return api.base + api.paths.current + city + '?' + currentParams

        case 'forecast':
            data['metric'] = true
            const fiveDaysParams = new URLSearchParams(data);
            return api.base + api.paths.fiveDays + city + '?' + fiveDaysParams

        default:
            return api.base + api.paths.current + city + '?'
    }

}