import { useEffect, useState } from 'react'
import { fetchData, formatUrl } from '../utilities/util'
const CurrentWeather = ({ city }) => {

    const [current, setCurrent] = useState(null)

    useEffect(() => {

        // fetchData(formatUrl('current', city))
        //     .then(result => setCurrent(result[0]))
        //     .catch(error => console.log(error));
        fetch('./currentWeather.txt')
            .then(response => response.json())
            .then(result => setCurrent(result))
            .catch(error => console.log('error at 25', error));

    }, [city])

    return (
        <>
            {current && <h2>{current.WeatherText}</h2>}
        </>
    )
}

export default CurrentWeather