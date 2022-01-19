import { useState, useEffect } from 'react'
import { fetchData, formatUrl } from '../utilities/util'

const Forecast = ({ city }) => {

    const [forecast, setForecast] = useState(null)

    useEffect(() => {

        fetchData(formatUrl('forecast', city))
            .then(result => setForecast(result))
            .catch(error => console.log('error in forecast', error));

        // fetch('./fiveDays.txt')
        //     .then(response => response.json())
        //     .then(result => setForecast(result))
        //     .catch(error => console.log('error at 25', error));

    }, [city])

    return <>
        <h2>5 day forecast</h2>
        {
            forecast && (
                <>
                    <div>{forecast.Headline.Text} </div>
                    <ul>
                        {
                            forecast.DailyForecasts.map(day => {
                                return <li key={day.EpochDate}>
                                    <div>min temp - {day.Temperature.Minimum.Value}</div>
                                    <div>max temp - {day.Temperature.Maximum.Value}</div>
                                </li>
                            }

                            )}
                    </ul>
                </>
            )

        }

    </>
}

export default Forecast

// <h2>{current.Temperature.Metric.Value} +C</h2>

