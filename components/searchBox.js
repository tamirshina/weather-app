import { useState, useEffect } from 'react'
import { fetchData, formatUrl } from '../utilities/util'
import styles from '../styles/Home.module.css'

const SearchBox = ({ handleClick }) => {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState(null);

    useEffect(() => {

        if (query === "") return
        // fetchData(formatUrl('autoComplete', query))
        //     .then(result => setResults(result))
        //     .catch(error => console.log('error at searchBox', error));

        fetch('./autocomplete.txt')
            .then(response => response.json())
            .then(result => setResults(result))
            .catch(error => console.log('error at 25', error));
    }, [query])

    const handleChange = ({ value }) => {

        if (value === "") {
            setResults(null)
            setQuery("")
        } else setQuery(value)

    }


    return (
        <>
            <input type='text' value={query} onChange={(e) => handleChange(e.target)} className={styles.searchBox} />
            {
                results && (
                    <ul>
                        {results.map(city => {
                            return (
                                <li key={city.Key}>
                                    <a onClick={() => handleClick(city.Key, city.LocalizedName)}>
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