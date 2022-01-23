import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { fetchData, formatUrl } from '../utilities/util'

const Forecast = () => {

    const cityId = useSelector((state) => state.cityData.cityId)
    const [forecast, setForecast] = useState(null)

    useEffect(() => {

        fetchData(formatUrl('forecast', cityId))
            .then(result => setForecast(result))
            .catch(error => console.log('error in forecast', error));
    }, [cityId])

    return <>
        {
            forecast && (
                <>
                    <h2>{forecast.Headline.Text} </h2>
                    <ul className='flex'>
                        {
                            forecast.DailyForecasts.map(day => {
                                return <li key={day.EpochDate}>
                                    <h3>{day.Date.slice(0, 7)}</h3>
                                    <div className='mb-[15px] flex-col rounded overflow-hidden mr-[15px] '>
                                        <div>min temp - {day.Temperature.Minimum.Value}</div>
                                        <div>max temp - {day.Temperature.Maximum.Value}</div>
                                    </div>
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

