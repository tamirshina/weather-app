import CurrentWeather from './currentWeather'
import Forecast from './forecast'
import FavoriteBtn from './favorites/favoriteBtn'
const DisplayedCity = ({ city, cityName }) => {

    return (
        <>
            <h2>{cityName}</h2>
            <CurrentWeather city={city} />
            <FavoriteBtn cityId={city} cityName={cityName} />
            <Forecast city={city} />
        </>
    )
}

export default DisplayedCity