import { useEffect, useState } from 'react'
import { fetchData, formatUrl } from '../utilities/util'
import { useToasts } from "react-toast-notifications"
const CurrentWeather = ({ cityId, cityName }) => {

    const [current, setCurrent] = useState(null)
    const { addToast } = useToasts();

    useEffect(() => {
        fetchData(formatUrl('current', cityId))
            .then(result => setCurrent(result[0]))
            .catch(error => addToast(error, { appearance: "warning" }));
    }, [cityId])

    return (
        <>
            {current && <h2 className='sticky text-4xl font-normal leading-normal mt-10 mb-5 text-blue-600/75'>{cityName} Is Currently {current.WeatherText}</h2>}
        </>
    )
}

export default CurrentWeather