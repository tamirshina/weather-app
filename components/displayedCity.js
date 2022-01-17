import { useState, useEffect } from 'react'
import CurrentWeather from './currentWeather'
import Forecast from './forecast'

const DisplayedCity = ({ city }) => {

    const [forecast, setForecast] = useState(null)
    const [current, setCurrent] = useState(null)

    useEffect(() => {
        const url = city ? city : 'tel-aviv'
        fetch('./currentWeather.txt')
            .then(response => response.json())
            .then(result => setCurrent(result[0]))
            .catch(error => console.log('error at 13', error));

        fetch('./fiveDays.txt')
            .then(response => response.json())
            .then(result => setForecast(result))
            .catch(error => console.log('error at 18', error));
    }, [city])

    return <>
        {current && <CurrentWeather current={current} />}
        {forecast && <Forecast forecast={forecast} />}
    </>
}

export default DisplayedCity