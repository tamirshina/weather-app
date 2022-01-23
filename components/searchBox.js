import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeCity } from '../app/actions'
import { fetchData, formatUrl } from '../utilities/util'

const SearchBox = () => {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState(null);
    const dispatch = useDispatch()

    useEffect(() => {

        if (query === "") return
        fetchData(formatUrl('autoComplete', query))
            .then(result => setResults(result))
            .catch(error => console.log('error at searchBox', error));

        // fetch('./autocomplete.txt')
        //     .then(response => response.json())
        //     .then(result => setResults(result))
        //     .catch(error => console.log('error at 25', error));
    }, [query])

    const handleChange = ({ value }) => {

        if (value === "") {
            setResults(null)
            setQuery("")
        } else setQuery(value)

    }


    return (
        <div className='inline-flex flex-col justify-center relative text-gray-500 my-4 min-h-[200px]'>
            <div className='relative'>
                <input type='text' value={query} onChange={(e) => handleChange(e.target)} placeholder='search for a city' className='placeholder: pl-2 w-80 h-8  rounded border border-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:bg-green-50 focus:border-transparent' />
                {
                    results && (
                        <ul className='bg-white border border-gray-100 w-full mt-2'>
                            {results.slice(0, 5).map(city => {
                                return (
                                    <li key={city.Key} className='pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900'>
                                        <a onClick={() => dispatch(changeCity(city.Key, city.LocalizedName))}>
                                            {city.LocalizedName}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    )
                }
            </div>
        </div>
    )
}

export default SearchBox