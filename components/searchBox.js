import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

const api = {
    base: 'http://dataservice.accuweather.com',
    apiKey: 'iI8yNmeTNGClggS3rSe2WVib3gjAhnOi',
    paths: {
        autocomplete: '/locations/v1/cities/autocomplete',
        current: 'currentconditions/v1/',
        fiveDays: '/forecasts/v1/daily/5day/'
    }
}

const SearchBox = () => {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState(null);

    useEffect(() => {

        //fetch(api.base + api.paths.autocomplete + "?apikey=" + api.apiKey + "&q=" + query + "&language=en")
        if (query === "") return
        fetch('./autocomplete.txt')
            .then(response => response.json())
            .then(result => setResults(result))
            .catch(error => console.log('error at 25', error));
    }, [query])

    const handleClick = () => {
        console.log('shina')
    }

    return (
        <>
            <input type='text' value={query} onChange={(e) => setQuery(e.target.value)} className={styles.searchBox} />
            {
                results && (
                    <ul>
                        {results.map(city => {
                            return (
                                <li key={city.Key}>
                                    <a onClick={handleClick}>
                                        {city.LocalizedName}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                )
            }
        </>
    )
}

export default SearchBox