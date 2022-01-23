import { useEffect, useState } from 'react'
import { fetchData, formatUrl } from '../utilities/util'
const CurrentWeather = ({ cityId, cityName }) => {

    const [current, setCurrent] = useState(null)

    useEffect(() => {

        // fetchData(formatUrl('current', cityId))
        //     .then(result => setCurrent(result[0]))
        //     .catch(error => console.log('error in currentWeather', error));
        fetch('./currentWeather.txt')
            .then(response => response.json())
            .then(result => setCurrent(result[0]))
            .catch(error => console.log('error at 25', error));

    }, [cityId])

    return (
        <>
            {current && <h2 className='sticky text-4xl font-normal leading-normal mt-10 mb-5 text-blue-600/75 ml-[13%]'>{cityName} Is Currently {current.WeatherText}</h2>}
        </>
    )
}

export default CurrentWeather