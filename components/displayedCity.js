import { useState, useEffect } from 'react'
import CurrentWeather from './currentWeather'
import { fetchData, formatUrl } from '../utilities/util'
import Forecast from './forecast'

const DisplayedCity = ({ city }) => {

    const [forecast, setForecast] = useState(null)
    const [current, setCurrent] = useState(null)

    useEffect(() => {

        fetchData(formatUrl('current', city))
            .then(result => setCurrent(result[0]))
            .catch(error => console.log(error));

        fetchData(formatUrl('forecast', city))
            .then(result => setForecast(result))
            .catch(error => console.log(error));

    }, [city])

    return <>
        {current && <CurrentWeather current={current} />}
        {forecast && <Forecast forecast={forecast} />}
    </>
}

export default DisplayedCity