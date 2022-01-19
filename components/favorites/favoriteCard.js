
import CurrentWeather from '../currentWeather'
const Favorites = ({ cityName, cityId }) => {

    return (
        <li key={cityId}>
            <h1>{cityName}</h1>
            <h1>{cityId}</h1>
            <CurrentWeather city={cityId} />
        </li>
    )
}

export default Favorites
